'use client'

import { ReactNode } from 'react'

import StoreProvider from '@/app/StoreProvider'

export default function Providers({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>
}
