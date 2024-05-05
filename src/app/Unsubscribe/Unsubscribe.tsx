import React from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { styles } from "./unsubscribe.style"
import { ChevronLeft } from 'lucide-react-native'

import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import NavButton from '../../components/Navbutton/NavButton'
import Button from '../../components/Button/Button'

const pigImage = require('../../../assets/sadPig.png')

export default function Shutdown({ navigation }: { navigation: any }) {
  // funcao para retornar a tela anterior
  const goBack = () => {
    navigation.goBack()
  }

  const cancelSubscription = () => {
    // implementar ação de cancelar inscrição
    navigation.navigate('Welcome')
  }

  return (
    <SafeAreaView style={styles.root}>
      <NavButton
        contentStyles={{ width: '100%' }}
        Icon={ChevronLeft}
        text='voltar'
        onPress={goBack}
        textStyles={{ fontSize: 16 }}
      />

      <View style={styles.container}>
        <HeaderTitle />

        <View style={styles.content}>
          <Image source={pigImage} style={{ width: 150, height: 150 }} />

          <Text style={styles.title}>Sentiremos sua falta!</Text>

          <Text style={styles.text}>
            Tem certeza que quer cancelar sua inscrição em nosso app?
            veja as vantagens que irá perder:
          </Text>

          <Text style={styles.text}>
            &bull; Fácil controle de gastos
          </Text>

          <Text style={styles.text}>
            &bull; Análise de gastos segmentada
          </Text>

          <Text style={styles.text}>
            &bull; Histórico de gastos por categoria
          </Text>

          <Button
            contentStyles={styles.button}
            label='Dar outra chance'
            onPress={goBack}
          />

          <Button 
            contentStyles={styles.cancelButton}
            textStyles={styles.cancelText}
            label='Cancelar inscrição'
            onPress={cancelSubscription}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}