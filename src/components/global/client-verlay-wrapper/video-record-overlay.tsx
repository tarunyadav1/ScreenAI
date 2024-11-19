'use client'

import { useEffect, useRef, useState } from 'react'
import RecordingSettings from '../videos/recording-settings'
import { useMediaStreams } from '@/hooks/use-media-streams'
import { useMediaPermissions } from '@/hooks/use-media-permissions'
import CameraPreview from './camera-preview'

interface VideoRecordOverlayProps {
	workspaceId: string
	isOpen: boolean
	onClose: () => void
}

const VideoRecordOverlay = ({
	workspaceId,
	isOpen,
	onClose,
}: VideoRecordOverlayProps) => {
	const [showSettings, setShowSettings] = useState(true)

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 bg-black/50 z-40">
			<RecordingSettings
				isOpen={showSettings}
				onClose={() => setShowSettings(false)}
			/>
			<CameraPreview />
		</div>
	)
}

export default VideoRecordOverlay
