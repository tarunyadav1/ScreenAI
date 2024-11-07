'use client'

import { Button } from '@/components/ui/button'
import { Monitor } from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const features = [
	{
		title: 'AI Analysis',
		description: 'Smart algorithms analyze your recordings automatically',
	},
	{
		title: 'Instant Processing',
		description: 'Lightning-fast processing for immediate sharing',
	},
	{
		title: 'Team Collaboration',
		description: 'Work together seamlessly with your team',
	},
]

export function Navbar() {
	return (
		<header className="fixed top-0 z-50 w-full  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-20">
			<div className="container">
				<nav className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-8">
						<Link href="/" className="flex items-center gap-2">
							<Monitor className="h-6 w-6" />
							<span className="text-xl font-bold">ScreenAI</span>
						</Link>
					</div>

					<div>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									{/* <NavigationMenuTrigger>Features</NavigationMenuTrigger> */}
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											{features.map((feature) => (
												<li key={feature.title} className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
															href="#">
															<div className="mb-2 text-lg font-medium">
																{feature.title}
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																{feature.description}
															</p>
														</a>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="#pricing" legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
											)}>
											Pricing
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link href="/contact" legacyBehavior passHref>
										<NavigationMenuLink
											className={cn(
												'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
											)}>
											Contact
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className="flex items-center gap-4">
						<Link href={'/dashboard'}>
							<Button size="default">Sign In</Button>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}
