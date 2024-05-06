import React from 'react'
import { View, Alert, StyleSheet, Text } from 'react-native'
import {
  Camera as VisionCamera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera'
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

  const handleToggleCamera = () => {
    setCameraPosition(cameraPosition === 'front' ? 'back' : 'front')
  }

  const handleToggleFlash = () => {
    if (!devices) return

    // se a camera for frontal, nao tem flash
    if(cameraPosition === 'front') {
      Alert.alert('Flash indisponível', 'Flash nao disponível na câmera frontal')
      return
    }

    setIsFlashOn(!isFlashOn)
  }

    // se nao tiver permissao, retorna null
    if (!permission || !devices) return (<View><Text>nao abriu</Text></View>)

  return (
    <View style={styles.root}>
      <VisionCamera
        style={StyleSheet.absoluteFill}
        device={devices}
        isActive={true}
        photo={true}
        torch={isFlashOn ? 'on' : 'off'}
        orientation='portrait'
        resizeMode='cover'
      />
    </View>
  )
}