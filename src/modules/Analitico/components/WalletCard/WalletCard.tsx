import React from 'react'
import { View, Text } from 'react-native'
import { TrendingUp, TrendingDown } from 'lucide-react-native'
import { styles } from './walletCard.style'
import { numberToReal } from '../../../../utils/numberToReal'

interface WalletCardProps {
  value: number
  percent: number
}

export default function WalletCard({ value, percent }: WalletCardProps) {
  const isPositive = percent >= 0
  const Icon = isPositive ? TrendingUp : TrendingDown

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Total da carteira</Text>
        <Text style={styles.money}>{numberToReal(value)}</Text>
      </View>

      <View style={[styles.percent_tag, isPositive ? styles.tag_positive : styles.tag_negative]}>
        <Icon size={24} color="white" />
        <Text style={styles.percent_text}>{percent}%</Text>
      </View>
    </View>
  )
}