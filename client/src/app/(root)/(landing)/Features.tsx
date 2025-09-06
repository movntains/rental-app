'use client'

import { motion } from 'motion/react'

import FeatureCard from '@/app/(root)/(landing)/FeatureCard'

import { FEATURES } from '@/lib/constants'

const CONTAINER_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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

export default function Features() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={CONTAINER_VARIANTS}
      className="bg-white px-6 py-24 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-4xl xl:max-w-6xl">
        <motion.h2
          variants={ITEM_VARIANTS}
          className="mx-auto mb-12 w-full text-center text-3xl font-bold sm:w-2/3"
        >
          Quickly find the home you want using our effective search filters!
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 xl:gap-16">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={`feature-${index}`}
              variants={ITEM_VARIANTS}
            >
              <FeatureCard
                imageSource={feature.imageSource}
                title={feature.title}
                description={feature.description}
                linkText={feature.linkText}
                linkUrl={feature.linkUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
