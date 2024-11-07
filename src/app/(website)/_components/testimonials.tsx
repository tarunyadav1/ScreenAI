import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
	{
		quote:
			'Opal has revolutionized how we create tutorial videos. The AI analysis saves hours of editing time.',
		author: 'Sarah Chen',
		role: 'Product Manager at TechCorp',
		avatar:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
	},
	{
		quote:
			'The automated transcription and key point extraction is a game-changer for our documentation process.',
		author: 'Michael Roberts',
		role: 'Lead Developer at StartupX',
		avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
	},
	{
		quote:
			"We've cut our training video production time in half thanks to Opal's intelligent features.",
		author: 'Emily Parker',
		role: 'Head of Learning at EduTech',
		avatar:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
	},
]

export function Testimonials() {
	return (
		<section className="w-full py-24">
			<div className="container">
				<div className="text-center">
					<h2 className="text-3xl font-bold">Loved by Teams Worldwide</h2>
					<p className="mt-4 text-muted-foreground">
						See what our customers have to say about Opal
					</p>
				</div>

				<div className="mt-16 grid gap-8 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<Card key={index} className="p-6">
							<blockquote className="text-lg">
								&ldquo;{testimonial.quote}&rdquo;
							</blockquote>
							<div className="mt-6 flex items-center gap-4">
								<Avatar>
									<AvatarImage
										src={testimonial.avatar}
										alt={testimonial.author}
									/>
									<AvatarFallback>{testimonial.author[0]}</AvatarFallback>
								</Avatar>
								<div>
									<div className="font-semibold">{testimonial.author}</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.role}
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
