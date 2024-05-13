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
  contentStyles?: StyleProp<ViewStyle>
  label: string
  onPress?: () => void
  testID?: string
  textStyles?: StyleProp<TextStyle>
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