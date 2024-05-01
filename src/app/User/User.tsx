import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import DeviceInfo from "react-native-device-info";
import { Avatar } from '@rneui/themed';
import { User2Icon, FileText, CircleX, LogOut } from 'lucide-react-native'

import NavButton from "../../components/Navbutton/NavButton";

import { styles } from "./user.style";

export default function User() {
  let version = DeviceInfo.getVersion();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.title_container}>
        <Avatar size={72} source={{ uri: "https://github.com/franklindrw.png" }} rounded />
        <Text style={styles.title_text}>Frankin Almeida Campos</Text>
        <Text style={styles.version_text}>v {version}</Text>
      
        <View style={styles.menuContainer}>
          <NavButton text="Meus dados" Icon={User2Icon} />
          <NavButton text="Termos de uso" Icon={FileText} />
          <NavButton text="Encerrar conta" Icon={CircleX} />
        </View>
      </View>

      <View style={styles.footer}>
        <NavButton text="Sair" Icon={LogOut} />
      </View>
    </SafeAreaView>
  );
};
