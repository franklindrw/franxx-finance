import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./home.style";
import Heading from "../../components/Heading/Heading";
import { theme } from "../../theme/theme";
import TransactionButton from "../../components/TransactionButton/TransactionButton";

export default function Home() {

  return (
    <SafeAreaView style={styles.root}>
      <Heading name="Franklin Campos" src="https://github.com/franklindrw.png" notifications={0} />
    
      <View style={styles.wallet_container}>
        <Text style={styles.wallet_label}>Carteira Total</Text>
        <Text style={styles.wallet_value}>R$ 7840,00</Text>
      </View>

      <View style={styles.income_container}>
        <View style={styles.income_item}>
          <Text style={styles.income_label}>Receita</Text>
          <Text style={[styles.income_value, { color: theme.colors.success }]}>+ R$ 5400,00</Text>
        </View>
        <View style={[styles.income_item, { borderRightWidth: 0 }]}>
          <Text style={styles.income_label}>Despesas</Text>
          <Text style={[styles.income_value, { color: theme.colors.danger }]}>- R$ 2345,90</Text>
        </View>
      </View>

      <View style={styles.buttons_container}>
        <TransactionButton variant="success" title="Adicionar Receita" />
        <TransactionButton variant="danger" title="Adicionar Despesa" />
      </View>
    </SafeAreaView>
  );
}
