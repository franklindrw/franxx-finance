import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import { Avatar } from '@rneui/themed'
import { useForm } from 'react-hook-form'

import { styles } from './myDetails.style'

import NavButton from '../../../components/Navbutton/NavButton'
import TextField from '../../../components/TextField';
import Button from '../../../components/Button/Button'

export default function MyDetails({ navigation }: { navigation: any }) {
  const { register, setValue, handleSubmit } = useForm()

  // registra os valores do input
  React.useEffect(() => {
    register("name")
    register("email")
    register("password")
    register("pass")
  }, [register])

  // funcao para retornar a tela anterior
  const goBack = () => {
    navigation.goBack()
  }

  const onSubmit = handleSubmit((data: any) => {
    console.log(data)
  })

  return (
    <SafeAreaView style={styles.root}>
      <NavButton
        contentStyles={{ width: '100%' }}
        Icon={ChevronLeft}
        text='voltar'
        onPress={goBack}
        textStyles={{ fontSize: 16 }}
      />

      <Avatar size={72} source={{ uri: "https://github.com/franklindrw.png" }} rounded />
      
      <View style={styles.container}>
      <TextField.Root>
          <TextField.Label label='Nome' />
          <TextField.InputText
            defaultValue='Franklin Almeida Campos'
            onChangeText={(text) => setValue("name", text)}
            placeholder='Digite seu nome completo'
          />
        </TextField.Root>

        <TextField.Root>
          <TextField.Label label='E-mail' />
          <TextField.InputText
            defaultValue='emailteste@teste.com'
            keyboardType='email-address'
            onChangeText={(text) => setValue("email", text)}
            placeholder='Digite seu e-mail'
          />
        </TextField.Root>

        <TextField.Root>
          <TextField.Label label='Nova senha' />
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

        <Button contentStyles={styles.button} label='salvar' onPress={onSubmit} testID='saveDataBtn' />
      </View>
    </SafeAreaView>
  )
}