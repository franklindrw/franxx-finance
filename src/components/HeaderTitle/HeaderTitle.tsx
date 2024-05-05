import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './headerTitle.style';

export default function HeaderTitle() {
  return (
    <View>
      <Text style={styles.titlePrimary}>Franxx</Text>
      <Text style={styles.titleSecondary}>Finance</Text>
      <Text style={styles.subtitle}>Controle Financeiro Pessoal</Text>
    </View>
  );
}
