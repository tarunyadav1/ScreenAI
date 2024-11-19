'use client'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useMediaPermissions } from '@/hooks/use-media-permissions'
import {
	ChevronDown,
	Mic,
	Monitor,
	Video,
	Settings,
	HelpCircle,
	X,
} from 'lucide-react'
import { useEffect, useRef } from 'react'

interface RecordingSettingsProps {
	isOpen: boolean
	onClose: () => void
}

const RecordingSettings = ({ isOpen, onClose }: RecordingSettingsProps) => {
	// if (!isOpen) return null

	return (
		<div className="fixed top-4 right-4 z-50 w-[300px] bg-[#1E1E1E] rounded-lg shadow-xl border border-gray-800">
			{/* Header */}
			<div className="p-4 border-b border-gray-800">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
						<span className="text-gray-300">O</span>
					</div>
					<span className="text-gray-300 text-lg">Opal</span>
				</div>
			</div>

			{/* Settings Options */}
			<div className="p-4  space-y-3 flex flex-col justify-center items-center">
				<div className="flex items-center justify-between gap-3 w-full">
					<Monitor size={20} />
					<div className="w-full">
						<SelectOptions
							options={['Current Tab', 'All Tabs']}
							placeholder="Current Tab"
						/>
					</div>
				</div>

				<div className="flex items-center justify-between gap-3 w-full">
					<Video size={20} />

					<div className="w-full">
						<SelectOptions
							options={['Current Tab', 'All Tabs']}
							placeholder="Current Tab"
						/>
					</div>
				</div>

				<div className="flex items-center justify-between gap-3 w-full">
					<Mic size={20} />

					<div className="w-full">
						<SelectOptions
							options={['Current Tab', 'All Tabs']}
							placeholder="Current Tab"
						/>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="p-3 border-t border-gray-800 flex items-center justify-end gap-2">
				<button className="p-2 hover:bg-gray-800 rounded-full">
					<Settings size={20} className="text-gray-400" />
				</button>
				<button className="p-2 hover:bg-gray-800 rounded-full">
					<HelpCircle size={20} className="text-gray-400" />
				</button>
				<button
					onClick={onClose}
					className="p-2 hover:bg-gray-800 rounded-full">
					<X size={20} className="text-gray-400" />
				</button>
			</div>
		</div>
	)
}

const SelectOptions = ({
	options,
	placeholder,
}: {
	options: string[]
	placeholder: string
}) => {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options.map((option) => (
						<SelectItem key={option} value={option}>
							{option}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default RecordingSettings
