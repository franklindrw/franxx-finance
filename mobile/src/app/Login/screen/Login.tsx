import React from 'react'
import { SafeAreaView, TouchableOpacity,  Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import { useForm } from 'react-hook-form'

import { styles } from './login.style'

import HeaderTitle from '../../../components/HeaderTitle/HeaderTitle'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button/Button'

export default function Login({ navigation }: { navigation: any }) {
  const { register, setValue, handleSubmit } = useForm();

  React.useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  // navega para tela de cadastro
  const handleRegister = () => {
    navigation.navigate("Register");
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
        <Text style={styles.heading}>Login</Text>

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

        <Button contentStyles={styles.button} onPress={onSubmit} label='Entrar'  />
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.hyperlink}>Ainda não é cadastrado? clique aqui!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}