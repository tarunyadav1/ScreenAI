import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function Pricing() {
	return (
		<section className="w-full py-24" id="pricing">
			<div className="container">
				<div className="text-center">
					<h2 className="text-3xl font-bold">Pricing</h2>
					<p className="mt-4 text-muted-foreground">
						Choose the perfect plan for your needs
					</p>
				</div>

				<div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
					<Card>
						<CardHeader>
							<CardTitle>Free Trial</CardTitle>
							<CardDescription>Perfect for getting started</CardDescription>
							<div className="mt-4 flex items-baseline">
								<span className="text-5xl font-bold">$0</span>
								<span className="text-muted-foreground">/m</span>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="mt-8 space-y-4">
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>25 videos per month</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>5 min per video</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>1 Organization</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>No team member</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>1-time AI features test</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full" variant="outline">
								Get Started
							</Button>
						</CardFooter>
					</Card>

					<Card className="relative">
						<CardHeader>
							<div className="absolute right-4 top-4">
								<Badge variant="secondary">Popular</Badge>
							</div>
							<CardTitle>Professional Plan</CardTitle>
							<CardDescription>For teams and professionals</CardDescription>
							<div className="mt-4 flex items-baseline">
								<span className="text-5xl font-bold">$99</span>
								<span className="text-muted-foreground">/m</span>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="mt-8 space-y-4">
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>Unlimited videos</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>Unlimited duration</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>Unlimited organizations</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>Unlimited team members</span>
								</li>
								<li className="flex items-center gap-2">
									<Check className="h-4 w-4 text-primary" />
									<span>All AI features</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Get Started</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	)
}
