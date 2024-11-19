'use client'

import { useEffect, useRef, useState } from 'react'
import { useMediaStreams } from '@/hooks/use-media-streams'

const CameraPreview = () => {
	const {
		cameraStream,
		error,
		videoRef,
		startCameraCapture,
		stopCameraCapture,
		isAccessible,
		screenVideoRef,
		screenStream,
		startScreenCapture,
		stopScreenCapture,
	} = useMediaStreams({
		width: 1280,
		height: 720,
	})

	return (
		<div className="flex flex-col gap-9">
			<div>
				<video
					ref={videoRef}
					autoPlay
					playsInline
					className="w-full max-w-md border rounded"
				/>
				<button
					onClick={startCameraCapture}
					disabled={!!cameraStream}
					className="bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50">
					Start Camera
				</button>
				<button
					onClick={stopCameraCapture}
					disabled={!cameraStream}
					className="bg-red-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50">
					Stop Camera
				</button>
			</div>

			<div>
				<video
					ref={screenVideoRef}
					autoPlay
					playsInline
					className="w-full max-w-md border rounded"
				/>
				<button
					onClick={startScreenCapture}
					disabled={!!screenStream}
					className="bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50">
					Share Screen
				</button>
				<button
					onClick={stopScreenCapture}
					disabled={!screenStream}
					className="bg-red-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50">
					Stop Sharing
				</button>
			</div>
		</div>
	)
}

export default CameraPreview
