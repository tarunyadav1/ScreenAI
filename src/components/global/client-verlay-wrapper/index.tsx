'use client'

import { useEffect, useState } from 'react'
import VideoRecordOverlay from './video-record-overlay'

interface ClientOverlayWrapperProps {
	children: React.ReactNode
	workspaceId: string
}

const ClientOverlayWrapper = ({
	children,
	workspaceId,
}: ClientOverlayWrapperProps) => {
	const [showRecording, setShowRecording] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowRecording(true)
		}, 5000)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className="relative">
			{children}
			<VideoRecordOverlay
				workspaceId={workspaceId}
				isOpen={showRecording}
				onClose={() => setShowRecording(false)}
			/>
		</div>
	)
}

export default ClientOverlayWrapper
