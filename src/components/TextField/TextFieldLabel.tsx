import React from "react";
import { Text, type TextStyle } from "react-native";
import { styles } from "./textField.style";

interface TextFieldLabelProps {
  label: string;
  style?: TextStyle;
}

export default function TextFieldLabel({ label, style }: TextFieldLabelProps) {
  return (
    <Text style={[styles.label, style]}>{label}</Text>
  );
}
