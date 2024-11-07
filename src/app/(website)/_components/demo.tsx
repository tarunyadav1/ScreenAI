import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Play, Upload, Share, User } from 'lucide-react'

export function Demo() {
	return (
		<section className="w-full py-24">
			<div className="container">
				<Card className="overflow-hidden rounded-xl border border-border/40 bg-gradient-to-b from-border/20 to-border/0 p-4">
					<div className="flex items-center gap-4 border-b border-border/40 pb-4">
						<div className="flex items-center gap-2">
							<div className="h-3 w-3 rounded-full bg-destructive" />
							<div className="h-3 w-3 rounded-full bg-yellow-500" />
							<div className="h-3 w-3 rounded-full bg-green-500" />
						</div>
						<div className="flex flex-1 items-center justify-between rounded-lg bg-muted px-4 py-2">
							<span className="text-sm text-muted-foreground">
								Search for people, projects, tags and more
							</span>
							<div className="flex items-center gap-2">
								<Button size="icon" variant="ghost">
									<Upload className="h-4 w-4" />
								</Button>
								<Button size="icon" variant="ghost">
									<Share className="h-4 w-4" />
								</Button>
								<Button size="icon" variant="ghost">
									<User className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
					<div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg">
						<div className="absolute inset-0 flex items-center justify-center bg-black/80">
							<Button size="lg" variant="outline" className="gap-2">
								<Play className="h-6 w-6 fill-current" />
								Play Demo
							</Button>
						</div>
					</div>
				</Card>
			</div>
		</section>
	)
}
