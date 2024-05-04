import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import DeviceInfo from "react-native-device-info";
import { Avatar } from '@rneui/themed';
import { User2Icon, FileText, CircleX, LogOut } from 'lucide-react-native'

import { styles } from "./user.style";

import NavButton from "../../components/Navbutton/NavButton";
import BottomSheet from "../../components/BottomSheet";
import PrivacityPolicy from "../../components/PrivacityPolice/PrivacityPolicy";

export default function User({ navigation }: { navigation: any }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  let version = DeviceInfo.getVersion();

  // acao para abrir modal
  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  // acao para fechar modal
  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  // Navigate to Login screen
  const handleLogout = () => {
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.title_container}>
        <Avatar size={72} source={{ uri: "https://github.com/franklindrw.png" }} rounded />
        <Text style={styles.title_text}>Frankin Almeida Campos</Text>
        <Text style={styles.version_text}>v {version}</Text>
      
        <View style={styles.menuContainer}>
          <NavButton text="Meus dados" Icon={User2Icon} />
          <NavButton text="Política de Privacidade" Icon={FileText} onPress={handleOpenModal} />
          <NavButton text="Encerrar conta" Icon={CircleX} />
        </View>
      </View>

      <View style={styles.footer}>
        <NavButton text="Sair" Icon={LogOut} onPress={handleLogout} />
      </View>

      <BottomSheet.Root
        onOpen={modalVisible}
        onClose={handleCloseModal}
      >
        <BottomSheet.Scroll>
          <PrivacityPolicy />
        </BottomSheet.Scroll>
      </BottomSheet.Root>
    </SafeAreaView>
  );
};
