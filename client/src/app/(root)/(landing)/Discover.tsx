'use client'

import { motion } from 'motion/react'

import DiscoverCard from '@/app/(root)/(landing)/DiscoverCard'

import { DISCOVER_ITEMS } from '@/lib/constants'

const CONTAINER_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const ITEM_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function Discover() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={CONTAINER_VARIANTS}
      className="mb-28 bg-white py-12"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:px-16">
        <motion.div
          variants={ITEM_VARIANTS}
          className="my-12 text-center"
        >
          <h2 className="text-3xl leading-tight font-semibold text-gray-800">Discover</h2>

          <p className="mt-4 text-lg text-gray-700">Find Your Dream Rental Property Today!</p>

          <p className="mx-auto mt-2 max-w-3xl text-gray-600">
            Searching for your dream rental property has never been easier. With our user-friendly search feature, you
            can quickly find the perfect home that meets all your needs. Start your search today and discover your dream
            rental property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 lg:gap-12 xl:gap-16">
          {DISCOVER_ITEMS.map((discoverItem, index) => (
            <motion.div
              key={index}
              variants={ITEM_VARIANTS}
            >
              <DiscoverCard
                imageSource={discoverItem.imageSource}
                title={discoverItem.title}
                description={discoverItem.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
