import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './totalExpensesCard.style'
import { numberToReal } from '../../../../utils/numberToReal'

interface TotalExpensesCardProps {
  money: number;
  creditCard: number;
}

export default function TotalExpensesCard({ money, creditCard }: TotalExpensesCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Gastos com Dinheiro</Text>
        <Text style={styles.value}>+ {numberToReal(money)}</Text>
      </View>

      <View>
        <Text style={styles.label}>Gastos com Cartão</Text>
        <Text style={styles.value}>+ {numberToReal(creditCard)}</Text>
      </View>
    </View>
  )
}