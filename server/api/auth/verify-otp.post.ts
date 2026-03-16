export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, code } = body

  // Basic validation
  if (!email || !code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and code are required',
    })
  }

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock OTP verification - in real app, check against database
  if (code === '123456') {
    return {
      success: true,
      message: 'OTP verified successfully',
      email: email,
      token: 'mock-jwt-token-' + Date.now(),
    }
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Invalid OTP code',
  })
})
