'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { authLinks } from '@/lib/links'

export default function CTA() {
  const handleSearchButtonClick = (): void => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Living room with comfy couches"
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12 xl:max-w-6xl xl:px-16"
      >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mr-10 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Find Your Dream Rental Property</h2>
          </div>

          <div>
            <p className="mb-5 text-white">Discover a wide range of rental properties in your desired location.</p>

            <div className="flex justify-center gap-6 md:justify-start">
              <Button
                type="button"
                variant="outline"
                onClick={handleSearchButtonClick}
                className="rounded-lg border-none px-6 py-5 font-semibold text-gray-700 hover:bg-gray-600 hover:text-gray-50"
              >
                <span className="sr-only">Go to </span>
                <span>Search</span>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="rounded-lg bg-cyan-700 px-6 py-5 font-semibold text-white hover:bg-white hover:text-gray-700"
              >
                <Link href={authLinks.REGISTER}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
