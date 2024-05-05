import React from 'react'
import { LucideIcon } from 'lucide-react-native'
import { 
  Text,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
  type TextStyle
} from 'react-native'

import { styles } from './navButton.style'

interface NavButtonProps {
  text: string
  Icon: LucideIcon
  onPress?: () => void
  textStyles?: StyleProp<TextStyle>
  contentStyles?: StyleProp<ViewStyle>
}

export default function({ 
  text,
  Icon,
  onPress,
  textStyles,
  contentStyles
}: NavButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, contentStyles]} onPress={onPress}>
      <Icon size={18} color='white' />
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </TouchableOpacity>
  )
}
