import React from 'react'
import { TextInput, type TextInputProps } from 'react-native'
import { styles } from './textField.style'

interface TextFieldInputTextProps extends TextInputProps {
  size?: "sm" | "md" | "lg";
}

export default function TextFieldInputText({ size, ...TextInputProps }: TextFieldInputTextProps) {
  const inputSize = size === "sm" ? styles.input_sm : size === "lg" ? styles.input_lg : styles.input_md;

  return (
    <TextInput 
      style={[styles.input, inputSize]}
      {...TextInputProps}
    />
  )
}
