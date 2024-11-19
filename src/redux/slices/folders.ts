import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the count type
type FolderCount = {
	_count: {
		videos: number
	}
}

// Define the folder properties
type FolderProperties = {
	id: string
	name: string
	createdAt: Date
	workSpaceId: string | null
}

// Combine them for the full folder type
type Folder = FolderCount & FolderProperties

// The final state type
type initialStateProps = {
	folders: Folder[]
}

const initialState: initialStateProps = {
	folders: [],
}

export const Folders = createSlice({
	name: 'folders',
	initialState,
	reducers: {
		FOLDERS: (state, action: PayloadAction<initialStateProps>) => {
			return { ...action.payload }
		},
	},
})

export const { FOLDERS } = Folders.actions
export default Folders.reducer
