// app/providers.tsx
'use client'

import { ExampleProvider } from '@/context/Context'
import {NextUIProvider} from '@nextui-org/react'

export function NextUiProviders({children}: { children: React.ReactNode }) {
  return (
    
    <NextUIProvider>
    <ExampleProvider>
    {children}
    </ExampleProvider>
    </NextUIProvider>
     
   
  )
}