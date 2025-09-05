'use client'

import { AppStore, makeStore } from '@/state/redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()

    setupListeners(storeRef.current.dispatch)
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
