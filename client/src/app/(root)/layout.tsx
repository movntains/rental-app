import { ReactNode } from 'react'

import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full">
      <Navbar />

      <main
        id="main"
        className="flex h-full w-full flex-col"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  )
}
