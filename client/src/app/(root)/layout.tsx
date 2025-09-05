import { clsx } from 'clsx'
import { ReactNode } from 'react'

import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />

      <main
        id="main"
        className={clsx('flex h-full w-full flex-col', `pt-${NAVBAR_HEIGHT}`)}
      >
        {children}
      </main>
    </div>
  )
}
