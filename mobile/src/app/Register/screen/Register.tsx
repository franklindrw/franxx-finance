import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { CheckBox } from '@rneui/themed'
import { useForm } from 'react-hook-form'

import { styles } from './register.style'

import HeaderTitle from '../../../components/HeaderTitle/HeaderTitle'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button/Button'
import PrivacityPolicy from '../../../components/PrivacityPolice/PrivacityPolicy'
import BottomSheet from '../../../components/BottomSheet'

export default function Register({ navigation }: { navigation: any }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const { register, setValue, handleSubmit } = useForm();

  React.useEffect(() => {
    register("name");
    register("email");
    register("password");
    register("pass");
  }, [register]);

  // navega para tela de cadastro
  const handleLogin = () => {
    navigation.navigate("Login");
  }

  // valida se o checkbox foi marcado
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  }

  // abre modal de termos de uso
  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  }

  // fecha modal de termos de uso
  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
  }

  // valida o login e navega para a tela principal
  const onSubmit = handleSubmit((data: any) => {
    console.log(data)
    navigation.navigate("Main")
  })

  return (
    <SafeAreaView style={styles.root}>
      <HeaderTitle />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
      <Text style={styles.heading}>Cadastre-se</Text>

        <TextField.Root>
          <TextField.Label label='Nome' />
          <TextField.InputText
            onChangeText={(text) => setValue("name", text)}
            placeholder='Digite seu nome completo'
          />
        </TextField.Root>

        <TextField.Root>
          <TextField.Label label='E-mail' />
          <TextField.InputText
            keyboardType='email-address'
            onChangeText={(text) => setValue("email", text)}
            placeholder='Digite seu e-mail'
          />
        </TextField.Root>

        <TextField.Root>
          <TextField.Label label='Senha' />
          <TextField.InputText
            onChangeText={(text) => setValue("password", text)}
            placeholder='Digite sua senha'
            secureTextEntry
          />
        </TextField.Root>

        <TextField.Root>
          <TextField.Label label='Confirme sua senha' />
          <TextField.InputText
            onChangeText={(text) => setValue("pass", text)}
            placeholder='Confirme sua senha'
            secureTextEntry
          />
        </TextField.Root>

        <View style={styles.acceptTerms}>
          <CheckBox
            checked={isChecked}
            size={18}
            onPress={handleCheckbox}
            containerStyle={{ backgroundColor: 'transparent', margin: 0, paddingHorizontal: 0 }}
          />

          <TouchableOpacity onPress={handleOpenModal}>
            <Text style={styles.acceptText}>Li e aceito a política de Privacidade</Text>
          </TouchableOpacity>
        </View>

        <Button contentStyles={styles.button} onPress={onSubmit} label='Cadastrar'  />
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.hyperlink}>Já é cadastrado? clique aqui!</Text>
      </TouchableOpacity>

      <BottomSheet.Root
        onOpen={modalVisible}
        onClose={handleCloseModal}
      >
        <BottomSheet.Scroll>
          <PrivacityPolicy />
        </BottomSheet.Scroll>
      </BottomSheet.Root>
    </SafeAreaView>
  )
}