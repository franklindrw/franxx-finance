import React from 'react'
import { View } from 'react-native'
import { styles } from './bottomSheet.style'

interface BottomSheetContainerProps {
  children: React.ReactNode
}

export default function BottomSheetContainer({ children }: BottomSheetContainerProps) {
  return (
    <View style={styles.content}>
      {children}
    </View>
  )
}