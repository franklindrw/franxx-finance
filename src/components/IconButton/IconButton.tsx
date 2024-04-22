import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./iconButton.style";

export interface IconButtonProps {
  onPress?: () => void;
  icon: JSX.Element;
  testID: string;
}

export default function IconButton({ onPress, icon, testID }: IconButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.root}
      testID={testID}
    >
      {icon}
    </TouchableOpacity>
  );
}
