export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  // Basic validation
  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email is required',
    })
  }

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock OTP request success - in real app, send email with OTP
  console.log(`[MOCK] OTP sent to ${email}. Use code: 123456`)

  return {
    success: true,
    message: 'OTP sent to your email',
    email: email,
    // For testing purposes, return the mock OTP code
    mockOtpCode: '123456',
  }
})
