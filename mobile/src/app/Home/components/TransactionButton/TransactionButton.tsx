import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./transactionButton.style";
import { TrendingUp, TrendingDown } from "lucide-react-native";
import { theme } from "../../../../theme/theme";

interface TransactionButtonProps {
  variant: "success" | "danger";
  title: string;
  onPress?: () => void;
}

export default function TransactionButton({ variant, title, onPress }: TransactionButtonProps) {
  const color = variant === "success" ? theme.colors.success : theme.colors.danger;

  return (
    <TouchableOpacity
      style={[styles.root, { backgroundColor: color }]}
      activeOpacity={0.5}
      onPress={onPress}
      testID="transaction-button"
    >
      <View style={styles.flex_container}>
        {variant === "success" ? <TrendingUp color="white" /> : <TrendingDown color="white" />}
        <Text style={styles.label}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
