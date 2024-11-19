import { useState } from 'react'

type PermissionStatus = 'granted' | 'denied' | 'pending'

interface MediaPermissions {
	camera: PermissionStatus
	microphone: PermissionStatus
	screen: PermissionStatus
}

interface UseMediaPermissionsReturn {
	permissions: MediaPermissions
	requestPermissions: () => Promise<void>
	error: Error | null
}

export const useMediaPermissions = (): UseMediaPermissionsReturn => {
	const [permissions, setPermissions] = useState<MediaPermissions>({
		camera: 'pending',
		microphone: 'pending',
		screen: 'pending',
	})
	const [error, setError] = useState<Error | null>(null)

	const requestPermissions = async () => {
		try {
			// Request camera and microphone together
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			})

			// Clean up the test stream
			mediaStream.getTracks().forEach((track) => track.stop())

			setPermissions((prev) => ({
				...prev,
				camera: 'granted',
				microphone: 'granted',
			}))
		} catch (err) {
			setError(err instanceof Error ? err : new Error('Permission denied'))
			setPermissions((prev) => ({
				...prev,
				camera: 'denied',
				microphone: 'denied',
			}))
		}
	}

	return { permissions, requestPermissions, error }
}
