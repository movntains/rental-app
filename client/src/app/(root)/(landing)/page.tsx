import CTA from '@/app/(root)/(landing)/CTA'
import Discover from '@/app/(root)/(landing)/Discover'
import Features from '@/app/(root)/(landing)/Features'
import Footer from '@/app/(root)/(landing)/Footer'
import Hero from '@/app/(root)/(landing)/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Discover />
      <CTA />
      <Footer />
    </>
  )
}
