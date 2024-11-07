import { Monitor } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className="border-t border-border/40">
			<div className="container py-12">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<div className="flex items-center gap-2">
							<Monitor className="h-6 w-6" />
							<span className="text-lg font-bold">Opal</span>
						</div>
						<p className="mt-4 text-sm text-muted-foreground">
							AI-powered screen recording for the modern workplace.
						</p>
					</div>

					<div>
						<h3 className="font-semibold">Product</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Features
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Security
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Roadmap
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold">Company</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									About
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold">Legal</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Privacy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground">
									Licenses
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Opal. All rights reserved.
				</div>
			</div>
		</footer>
	)
}
