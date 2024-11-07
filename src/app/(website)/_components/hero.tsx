import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'

export function Hero() {
	return (
		<section className="relative">
			<div className="absolute inset-0 -z-10">
				<div className="gradient-blur absolute inset-0" />
			</div>
			<div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
				<h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
					AI-Driven Screen Recording
					<span className="block">for Next-Level Productivity</span>
				</h1>
				<p className="max-w-2xl text-muted-foreground">
					Let AI Capture and Analyze for Faster Decision Making. Record,
					Transcribe, and Analyze Screen Activity with AI, Saving Time and
					Boosting Efficiency, Cutting Your Recording Time in Half.
				</p>
				<div className="flex gap-4">
					<Button size="lg" className="mt-4">
						Get Started Now
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
					<HoverCard>
						<HoverCardTrigger asChild>
							<Button size="lg" variant="outline" className="mt-4">
								Learn More
							</Button>
						</HoverCardTrigger>
						<HoverCardContent className="w-80">
							<div className="space-y-2">
								<h4 className="text-sm font-semibold">Why Choose ScreenAI?</h4>
								<p className="text-sm text-muted-foreground">
									Our AI-powered platform automatically analyzes your screen
									recordings, providing instant transcriptions, key moments, and
									actionable insights.
								</p>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>
			</div>
		</section>
	)
}
