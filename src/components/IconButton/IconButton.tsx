import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./IconButton.style";

export interface IconButtonProps {
  onPress?: () => void;
  icon: JSX.Element;
}

export default function IconButton({ onPress, icon }: IconButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.root}
    >
      {icon}
    </TouchableOpacity>
  );
}
