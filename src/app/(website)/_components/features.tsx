import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Brain, Zap, Clock, Share2, LineChart, Shield } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const features = [
	{
		icon: Brain,
		title: 'AI-Powered Analysis',
		description:
			'Smart algorithms analyze your recordings to provide actionable insights and automated transcriptions.',
	},
	{
		icon: Zap,
		title: 'Instant Processing',
		description:
			'Lightning-fast processing ensures your recordings are ready to share within seconds.',
	},
	{
		icon: Clock,
		title: 'Time-Saving Tools',
		description:
			'Automated summaries and highlights help you focus on what matters most.',
	},
	{
		icon: Share2,
		title: 'Easy Sharing',
		description:
			'Share recordings instantly with customizable privacy settings and viewing permissions.',
	},
	{
		icon: LineChart,
		title: 'Analytics Dashboard',
		description:
			'Track viewer engagement and gather insights with comprehensive analytics.',
	},
	{
		icon: Shield,
		title: 'Enterprise Security',
		description:
			'Bank-level encryption and security measures keep your content safe and private.',
	},
]

export function Features() {
	return (
		<section className="w-full py-24 bg-secondary/50">
			<div className="container">
				<div className="text-center">
					<h2 className="text-3xl font-bold">Powerful Features</h2>
					<p className="mt-4 text-muted-foreground">
						Everything you need to capture, analyze, and share your screen
						recordings
					</p>
				</div>

				<Tabs defaultValue="all" className="mt-16">
					<TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
						<TabsTrigger value="all">All Features</TabsTrigger>
						<TabsTrigger value="ai">AI Features</TabsTrigger>
					</TabsList>
					<TabsContent value="all" className="mt-8">
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map((feature, index) => (
								<Card
									key={index}
									className="border border-border/40 bg-gradient-to-b from-border/20 to-border/0">
									<CardHeader>
										<feature.icon className="h-12 w-12 text-primary" />
										<CardTitle className="mt-4">{feature.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{feature.description}</CardDescription>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>
					<TabsContent value="ai" className="mt-8">
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.slice(0, 3).map((feature, index) => (
								<Card
									key={index}
									className="border border-border/40 bg-gradient-to-b from-border/20 to-border/0">
									<CardHeader>
										<feature.icon className="h-12 w-12 text-primary" />
										<CardTitle className="mt-4">{feature.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{feature.description}</CardDescription>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	)
}
