import React from 'react'
import { Navbar } from './_components/navbar'
import { Hero } from './_components/hero'
import { Features } from './_components/features'
import { Demo } from './_components/demo'
import { Testimonials } from './_components/testimonials'
import { Pricing } from './_components/pricing'
import { CTA } from './_components/cta'
import { Footer } from './_components/footer'

const Home = () => {
	return (
		<main className="relative min-h-screen pt-16">
			<Navbar />
			<Hero />
			<Features />
			<Demo />
			<Testimonials />
			<Pricing />
			<CTA />
			<Footer />
		</main>
	)
}

export default Home
