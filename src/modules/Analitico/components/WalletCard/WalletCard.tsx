import React from 'react'
import { View, Text } from 'react-native'
import { TrendingUp, TrendingDown } from 'lucide-react-native'
import { styles } from './walletCard.style'

export default function WalletCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Total da carteira</Text>
        <Text style={styles.money}>R$ 38.900,00</Text>
      </View>

      <View style={styles.percent_container}>
        <TrendingUp size={24} color="white" />
        <Text style={styles.percent_text}>+ 2.5%</Text>
      </View>
    </View>
  )
}