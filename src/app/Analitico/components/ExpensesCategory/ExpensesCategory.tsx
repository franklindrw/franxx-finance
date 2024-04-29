import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './expensesCategory.style'
import { categoryIcons, type CategoryIcons } from '../../../../utils/categoryIcons'
import { numberToReal } from '../../../../utils/numberToReal'
import { CircleHelp } from 'lucide-react-native';

interface ExpensesCategoryProps {
  category: string
  expense_total: number
  percentage: number
}

export default function ExpensesCategory({ category, expense_total, percentage }: ExpensesCategoryProps) {
  const Icon = categoryIcons[category as CategoryIcons] ?? CircleHelp

  return (
    <View style={styles.root}>
      <View style={styles.category_div}>
        <Icon color='white' size={28} />
        <Text style={styles.category_text}>{category}</Text>
      </View>

      <View style={styles.values_div}>
        <Text style={styles.money_value}>{numberToReal(expense_total)}</Text>
        <Text style={styles.percentage_value}>
          {percentage}%
        </Text>
      </View>
    </View>
  )
}