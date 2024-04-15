import React from "react";
import { View, Text, type TextStyle } from "react-native";
import { styles } from "./textField.style";

interface TextFieldRootProps {
  children: JSX.Element | JSX.Element[];
  style?: TextStyle;
  error?: string;
}

export default function TextFieldRoot({ children, style, error }: TextFieldRootProps) {
  return (
    <View style={[styles.container, style]}>
      { children }
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}