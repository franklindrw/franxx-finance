import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './totalExpensesCard.style'

interface TotalExpensesCardProps {
  money: number;
  creditCard: number;
}

export default function TotalExpensesCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Gastos com Dinheiro</Text>
        <Text style={styles.value}>+ R$ 372,85</Text>
      </View>

      <View>
        <Text style={styles.label}>Gastos com Cartão</Text>
        <Text style={styles.value}>+ R$ 1.500,00</Text>
      </View>
    </View>
  )
}