import React from "react"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { UsersProvider } from "./UsersContext"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SafeAreaProvider>
      <UsersProvider>
        {children}
      </UsersProvider>
    </SafeAreaProvider>
  )
}
