import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./button.style";

interface ButtonProps {
  label: string;
  width?: number | string;
  variant?: "solid" | "outline" | "ghost" | "link";
  color?: string;
  onPress?: () => void;
}

export default function Button({ label, width, variant, color, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      /* @ts-ignore */
      style={[styles.root, { width: width }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}