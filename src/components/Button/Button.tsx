import React from "react";
import { 
  Text,
  TouchableOpacity,
  View,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native"

import { styles } from "./button.style"
import { theme } from "../../theme/theme"

interface ButtonProps {
  label: string
  textStyles?: StyleProp<TextStyle>
  contentStyles?: StyleProp<ViewStyle>
  width?: number | string
  color?: string
  onPress?: () => void
  testID?: string
}

export default function Button({
  contentStyles,
  label,
  onPress,
  testID,
  textStyles,
}: ButtonProps) {
  return (
    <TouchableOpacity
      /* @ts-ignore */
      style={[styles.root, contentStyles]}
      onPress={onPress}
      activeOpacity={0.7}
      testID={testID}
    >
      <Text style={[styles.label, textStyles]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}