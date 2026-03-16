export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Simulate user registration logic - accept both old and new field names
  const { fullName, email, password, action, firstName, lastName, phone, dob, postcode, gender } = body

  // Validate required fields
  const hasRequiredFields = email && password && (firstName || fullName) && (lastName || fullName)
  
  if (action === 'create_account' || hasRequiredFields) {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const userName = firstName && lastName ? `${firstName} ${lastName}` : fullName || 'New User'

    return {
      success: true,
      message: 'Account created successfully',
      user: {
        id: Date.now().toString(),
        email: email || 'user@example.com',
        name: userName,
        firstName: firstName || fullName?.split(' ')[0],
        lastName: lastName || fullName?.split(' ')[1],
        phone: phone,
        dob: dob,
        postcode: postcode,
        gender: gender,
      },
      token: 'mock-jwt-token-' + Date.now(),
      redirect: '/thank-you',
    }
  }

  throw createError({
    statusCode: 400,
    statusMessage: 'Invalid request - missing required fields',
  })
})
