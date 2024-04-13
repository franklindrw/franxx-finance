import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./textField.style";

interface TextFieldProps extends TextInputProps {
  label: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

export default function TextField({ label, error, size, ...TextInputProps }: TextFieldProps) {
  const inputSize = size === "sm" ? styles.input_sm : size === "lg" ? styles.input_lg : styles.input_md;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={[styles.input, inputSize]}
        {...TextInputProps}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
