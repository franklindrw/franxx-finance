import React from "react";
import { TextInput, type TextInputProps } from 'react-native'
import { styles } from "./textField.style";

interface TextFieldInputTextProps {
  size?: "sm" | "md" | "lg";
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function TextFieldMoneyInput({ size, onChange, placeholder }: TextFieldInputTextProps) {
  const [value, setValue] = React.useState("R$ 0,00");

  const inputSize = size === "sm" ? styles.input_sm : size === "lg" ? styles.input_lg : styles.input_md;

  const formatMoney = (value: string) => {
    const valueFormatted = value.replace(/\D/g, "");
    const valueParsed = Number(valueFormatted) / 100;
    const valueString = valueParsed.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    setValue(valueString);

    return valueString;
  };

  const handleChangeText = (text: string) => {
    const valueFormatted = formatMoney(text);
    onChange && onChange(valueFormatted);
  };

  return (
    <TextInput 
      style={[styles.input, inputSize]}
      placeholder={placeholder}
      value={value}
      onChangeText={handleChangeText}
      keyboardType="numeric"
    />
  )
}
