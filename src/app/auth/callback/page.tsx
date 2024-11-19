import { onAuthenticateUser } from '@/app/actions/user'
import { redirect } from 'next/navigation'

const AuthCallbackPage = async () => {
	const auth = await onAuthenticateUser()

	if (auth.status === 200 || auth.status === 201) {
		// Successful authentication, redirect to dashboard
		return redirect(`/dashboard/${auth.user?.workspace[0].id}`)
	}

	// Handle error cases
	if (auth.status === 403 || auth.status === 400 || auth.status === 500)
		return redirect('/auth/sign-in')

	// Generic error, redirect to home
	return window.location.replace('/')
}

export default AuthCallbackPage
