import { useState, useCallback, useRef, useEffect } from 'react'
import RecordRTC, { RecordRTCPromisesHandler } from 'recordrtc'

export const useMediaStreams = (options: any) => {
	const [stream, setStream] = useState<MediaStream | null>(null)
	const [screenStream, setScreenStream] = useState<MediaStream | null>(null)
	const [error, setError] = useState<Error | null>(null)
	const [isAccessible, setIsAccessible] = useState<boolean>(false)
	const videoRef = useRef<HTMLVideoElement>(null)
	const screenVideoRef = useRef<HTMLVideoElement>(null)

	// check camera accessibility on mount
	useEffect(() => {
		const checkCameraAvailability = async () => {
			try {
				const devices = await navigator.mediaDevices.enumerateDevices()
				const videoDevices = devices.filter(
					(device) => device.kind === 'videoinput'
				)
				setIsAccessible(videoDevices.length > 0)
			} catch {
				setIsAccessible(false)
			}
		}

		checkCameraAvailability()
	}, [])

	const startCameraCapture = useCallback(async () => {
		try {
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: {
					width: options.width || { ideal: 1280 },
					height: options.height || { ideal: 720 },
					...options.videoConstraints,
				},
			})

			setStream(mediaStream)
			setError(null)

			if (videoRef.current) {
				videoRef.current.srcObject = mediaStream
			}
		} catch (error: any) {
			console.error('Error accessing camera:', error)
			setError(error.message)
			setStream(null)
		}
	}, [options])

	const startScreenCapture = useCallback(async () => {
		try {
			const displayMediaOptions = {
				video: {
					cursor: 'always', // or "motion"
					displaySurface: 'browser', // can be browser, window, monitor
				},
				audio: false, // set to true if you want to capture audio
			}

			const mediaStream = await navigator.mediaDevices.getDisplayMedia(
				displayMediaOptions
			)

			// handle stream ending
			mediaStream.getVideoTracks()[0].onended = () => {
				stopScreenCapture()
			}

			setScreenStream(mediaStream)
			setError(null)

			if (screenVideoRef.current) {
				screenVideoRef.current.srcObject = mediaStream
			}

			return mediaStream
		} catch (error: any) {
			console.error('Error accessing screen:', error)
			setError(error.message)
			setScreenStream(null)
		}
	}, [])

	// Stop camera stream
	const stopCameraCapture = useCallback(() => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop())
			setStream(null)

			if (videoRef.current) {
				videoRef.current.srcObject = null
			}
		}
	}, [stream])

	const stopScreenCapture = useCallback(() => {
		if (screenStream) {
			screenStream.getTracks().forEach((track) => track.stop())
			setScreenStream(null)

			if (screenVideoRef.current) {
				screenVideoRef.current.srcObject = null
			}
		}
	}, [screenStream])

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (stream) {
				stream.getTracks().forEach((track) => track.stop())
			}
			if (screenStream) {
				screenStream.getTracks().forEach((track) => track.stop())
			}
		}
	}, [stream])

	return {
		// Camera capture methods and refs
		cameraStream: stream,
		videoRef,
		startCameraCapture,
		stopCameraCapture,

		// Screen capture methods and refs
		screenStream,
		screenVideoRef,
		startScreenCapture,
		stopScreenCapture,

		error,
		isAccessible,
	}
}
