import React from 'react'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div suppressHydrationWarning className="flex flex-col xl:px-0">
			{children}
		</div>
	)
}

export default Layout
