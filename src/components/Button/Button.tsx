import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./button.style";
import { theme } from "../../theme/theme";

interface ButtonProps {
  label: string;
  width?: number | string;
  variant?: "solid" | "outline" | "ghost" | "link";
  color?: string;
  onPress?: () => void;
  testID?: string;
}

export default function Button({ label, width, variant, color = theme.colors.secondary, onPress, testID }: ButtonProps) {
  return (
    <TouchableOpacity
      /* @ts-ignore */
      style={[styles.root, { width: width, backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}
      testID={testID}
    >
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}