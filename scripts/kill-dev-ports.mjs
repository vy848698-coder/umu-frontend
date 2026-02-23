import { execSync } from 'node:child_process'

const ports = [3000, 3001]

const parseWindowsPids = (output, port) => {
    const lines = output.split(/\r?\n/)
    const pids = new Set()

    for (const line of lines) {
        if (!line.includes(`:${port}`) || !line.includes('LISTENING')) continue
        const match = line.trim().match(/\s+(\d+)$/)
        if (!match) continue
        const pid = Number(match[1])
        if (!Number.isNaN(pid) && pid !== process.pid) {
            pids.add(pid)
        }
    }

    return [...pids]
}

const parseUnixPids = (output) => {
    const pids = new Set()

    for (const token of output.split(/\s+/)) {
        const pid = Number(token.trim())
        if (!Number.isNaN(pid) && pid !== process.pid) {
            pids.add(pid)
        }
    }

    return [...pids]
}

const getPidsOnPort = (port) => {
    try {
        if (process.platform === 'win32') {
            const out = execSync(`netstat -ano -p tcp | findstr :${port}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString()
            return parseWindowsPids(out, port)
        }

        const out = execSync(`lsof -ti tcp:${port}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString()
        return parseUnixPids(out)
    } catch {
        return []
    }
}

const killed = new Set()

for (const port of ports) {
    const pids = getPidsOnPort(port)

    for (const pid of pids) {
        if (killed.has(pid)) continue

        try {
            process.kill(pid)
            killed.add(pid)
            console.log(`Stopped PID ${pid} on port ${port}`)
        } catch {
            console.log(`Could not stop PID ${pid} on port ${port}`)
        }
    }
}