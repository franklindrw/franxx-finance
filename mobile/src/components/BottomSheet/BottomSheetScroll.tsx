import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './bottomSheet.style'

interface BottomSheetScrollProps {
  children: React.ReactNode
}

export default function BottomSheetScroll({ children }: BottomSheetScrollProps) {
  return (
    <ScrollView style={{ width: '100%' }}>
      <TouchableOpacity activeOpacity={1} style={styles.content}>
        {children}
      </TouchableOpacity>
    </ScrollView>
  )
}
