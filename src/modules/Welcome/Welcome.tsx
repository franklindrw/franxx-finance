import React from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import { styles } from "./welcome.style";
import Button from "../../components/Button/Button";

const logoImg = require('../../../assets/logo.jpg');

export default function Welcome({ navigation }: { navigation: any }) {

  const handleHome = () => {
    // Navigate to Home screen
    navigation.navigate("Main");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titlePrimary}>Franxx</Text>
        <Text style={styles.titleSecondary}>Finance</Text>
        <Text style={styles.subtitle}>Controle Financeiro Pessoal</Text>
      </View>
      <Image
        source={logoImg}
        style={styles.image}
      />
      <Text style={styles.text}>
        Gerencie suas finanças pessoais de forma eficaz e intuitiva com o
        nosso aplicativo de controle financeiro pessoal.
      </Text>

      <Button label="continuar" width='60%' onPress={handleHome} />
    </SafeAreaView>
  );
}
