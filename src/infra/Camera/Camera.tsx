import React from 'react'
import { View, Alert, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import {
  Camera as VisionCamera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera'
import { ChevronLeft, SwitchCamera, Zap, ZapOff } from 'lucide-react-native'

import NavButton from '../../components/Navbutton/NavButton'

import { styles } from './camera.style'

interface CameraProps {
  navigation: any
}

export default function Camera({ navigation }: CameraProps) {
  // NOTE: configuracao de permissao da camera
  const { hasPermission, requestPermission } = useCameraPermission()
  const [permission, setPermission] = React.useState<null | boolean>(null)

  // NOTE: configuracao de controles da camera
  const [ cameraPosition, setCameraPosition ] = React.useState('front')
  const [ isFlashOn, setIsFlashOn ] = React.useState(false)
  const FlashIcon = isFlashOn ? Zap : ZapOff

  const devices = useCameraDevice("front")
  React.useEffect(() => {
    if (hasPermission) {
      setPermission(true)
    }

    (async () => {
      // pede permissao para usar a camera
      const permission = await requestPermission()
      
      // se tiver permissao, seta o estado para true
      if (permission){
        setPermission(true)
      }
    })()
  }, [])

  // TODO: acao para trocar a camera
  const handleToggleCamera = () => {
    setCameraPosition(cameraPosition === 'front' ? 'back' : 'front')
  }

  // TODO: acao para ligar/desligar o flash
  const handleToggleFlash = () => {
    if (!devices) return

    // se a camera for frontal, nao tem flash
    if(cameraPosition === 'front') {
      Alert.alert('Flash indisponível', 'Flash nao disponível na câmera frontal')
      return
    }

    setIsFlashOn(!isFlashOn)
  }

  // TODO: acao para fechar a camera
  const handleCloseCamera = () => {
    navigation.goBack()
  }

  // TODO: acao para tirar a foto
  const handleTakePicture = () => {
    console.log('tirou foto')
  }

  // [ ] fazer mensagem de nao foi possivel - se nao tiver permissao, retorna null
  if (!permission || !devices) return (<View><Text>nao abriu</Text></View>)

  return (
    <SafeAreaView style={styles.root}>
      <VisionCamera
        style={StyleSheet.absoluteFill}
        device={devices}
        isActive={true}
        photo={true}
        torch={isFlashOn ? 'on' : 'off'}
        orientation='portrait'
        resizeMode='cover'
      />

        <NavButton
          contentStyles={styles.backButton}
          Icon={ChevronLeft}
          text='voltar'
          onPress={handleCloseCamera}
          textStyles={{ fontSize: 16 }}
        />

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <FlashIcon size={24} color='white' onPress={handleToggleFlash} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <SwitchCamera size={24} color='white' onPress={handleToggleCamera} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.toggleCamera}
        onPress={handleTakePicture}
      >
        <View style={styles.innerBorder}></View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}