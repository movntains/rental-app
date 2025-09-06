'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Pool in the backyard of a modern home"
        fill
        className="object-cover object-center"
        aria-hidden="true"
        priority
      />

      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="absolute top-1/3 w-full -translate-y-1/2 text-center motion-safe:transform"
      >
        <div className="mx-auto max-w-4xl px-16 sm:px-12">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Start your journey to finding the perfect place to call home
          </h1>

          <p className="mb-8 text-xl text-white">
            Explore our wide range of rental properties tailored to fit your lifestyle and needs!
          </p>

          <div className="flex items-stretch justify-center">
            <Label
              className="sr-only"
              htmlFor="search-input"
            >
              City, Neighborhood, or Address
            </Label>

            <Input
              id="search-input"
              type="text"
              value="Search query"
              onChange={() => {}}
              placeholder="Search by city, neighborhood, or address"
              className="h-12 w-full max-w-lg rounded-xl rounded-r-none border-none bg-white"
            />

            <Button
              type="button"
              variant="secondary"
              className="h-12 rounded-xl rounded-l-none border-none bg-cyan-700 text-white hover:bg-cyan-800"
              onClick={() => {}}
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
