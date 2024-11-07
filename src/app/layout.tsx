import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Manrope, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const manrope = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Opal',
	description: 'Share videos with your friends',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body suppressHydrationWarning className={`${manrope.className} `}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
