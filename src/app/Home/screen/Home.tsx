import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { UsersContext } from "../../../shared/contexts/UsersContext";
import { styles } from "./home.style";
import { theme } from "../../../theme/theme";

import Heading from "../components/Heading/Heading";
import ActivityList from "../../../components/ActivityList/ActivityList";
import TransactionModal from "../components/TransactionModal/TransactionModal";
import TransactionButton from "../components/TransactionButton/TransactionButton";

const data = require('../../../data/recent_activity.json');

export default function Home({ navigation }: { navigation: any }) {
  const { photoUri } = React.useContext(UsersContext)
  const [openModal, setOpenModal] = React.useState(false);
  const [transactionType, setTransactionType] = React.useState("");

  // acao para navegar para a tela de perfil
  const handleNavigateProfile = () => {
    navigation.navigate("Usuário");
  }

  // acao para abrir o modal
  const handleOpenModal = (transaction: string) => {
    setTransactionType(transaction);
    setOpenModal(true);
  }

  // acao para fechar o modal
  const handleCloseModal = () => {
    setTransactionType("");
    setOpenModal(false);
  }

  return (
    <SafeAreaView style={styles.root}>
      <Heading
        name="Franklin Campos"
        photo={photoUri}
        notifications={0}
        userAction={handleNavigateProfile}
      />
    
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
        <TransactionButton 
          variant="success"
          title="Adicionar Receita"
          onPress={() => handleOpenModal("receita")}
        />

        <TransactionButton 
          variant="danger"
          title="Adicionar Despesa"
          onPress={() => handleOpenModal("despesa")}
        />
      </View>

      <ActivityList data={data} title="Atividades Recentes" />

      <TransactionModal onOpen={openModal} onClose={handleCloseModal} type={transactionType} />
    </SafeAreaView>
  );
}
