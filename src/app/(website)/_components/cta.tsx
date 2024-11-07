import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
	return (
		<section className="relative w-full py-24 overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div className="gradient-blur absolute inset-0" />
			</div>
			<div className="container">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold sm:text-4xl">
						Ready to Transform Your Screen Recording?
					</h2>
					<p className="mt-4 text-muted-foreground">
						Join thousands of professionals who are already saving time and
						boosting productivity with Opal.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button size="lg" className="gap-2">
							Start Free Trial
							<ArrowRight className="h-4 w-4" />
						</Button>
						<Button size="lg" variant="secondary">
							Schedule Demo
						</Button>
					</div>
					<p className="mt-4 text-sm text-muted-foreground">
						No credit card required • 14-day free trial • Cancel anytime
					</p>
				</div>
			</div>
		</section>
	)
}
