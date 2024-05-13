import React from "react";
import { SafeAreaView, Text, Image } from "react-native";

import { styles } from "./welcome.style";

import Button from "../../../components/Button/Button";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";

const logoImg = require('../../../../assets/logo.jpg');

export default function Welcome({ navigation }: { navigation: any }) {
  // navega para tela de login
  const handleLogin = () => {
    navigation.navigate("Login");
  }
  
  // navega para tela de cadastro
  const handleRegister = () => {
    navigation.navigate("Register");
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle />

      <Image
        source={logoImg}
        style={styles.image}
      />

      <Text style={styles.text}>
        Gerencie suas finanças pessoais de forma eficaz e intuitiva com o
        nosso aplicativo de controle financeiro pessoal.
      </Text>

      <Button contentStyles={styles.button} label="Entrar" onPress={handleLogin} />

      <Button contentStyles={styles.button} label="Cadastre-se" onPress={handleRegister} />
    </SafeAreaView>
  );
}
