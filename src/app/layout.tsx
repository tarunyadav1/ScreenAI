import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import { DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import ReactQueryProvider from '@/react-query'
import { ReduxProvider } from '@/redux/provider'
import { Toaster } from 'sonner'

const manrope = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'ScreenAI',
	description: 'Share videos with your friends',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className="dark">
				<body suppressHydrationWarning className={`${manrope.className} `}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<ReduxProvider>
							<ReactQueryProvider>
								{children}
								<Toaster />
							</ReactQueryProvider>
						</ReduxProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
