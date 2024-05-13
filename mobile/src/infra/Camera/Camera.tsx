import React from 'react'
import { Alert, Image, Modal, StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import {
  Camera as VisionCamera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera'
import { ChevronLeft, SwitchCamera, Zap, ZapOff, Check, XIcon } from 'lucide-react-native'
import { UsersContext } from '../../shared/contexts/UsersContext'

import NavButton from '../../components/Navbutton/NavButton'

import { styles } from './camera.style'

interface CameraProps {
  navigation: any
}

export default function Camera({ navigation }: CameraProps) {
  const { editPhoto } = React.useContext(UsersContext)
  // NOTE: configuracao de permissao da camera
  const { hasPermission, requestPermission } = useCameraPermission()
  const [permission, setPermission] = React.useState<null | boolean>(null)
  const camera = React.useRef<VisionCamera>(null)

  // NOTE: configuracao de controles da camera
  const [ cameraPosition, setCameraPosition ] = React.useState<"front" | "back">('front')
  const [ isFlashOn, setIsFlashOn ] = React.useState(false)
  const FlashIcon = isFlashOn ? Zap : ZapOff

  // NOTE: armazenamento e preview da foto
  const [ photoUri, setPhotoUri ] = React.useState<string | null>(null)
  const [ modalVisible, setModalVisible ] = React.useState(false)

  const devices = useCameraDevice(cameraPosition)

  // NOTE: configuração do tamanho da foto
  const format = useCameraFormat(devices, [
    { photoResolution: { width: 720, height: 720 }, autoFocusSystem: 'contrast-detection' }
  ])

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

  // NOTE: camera button actions
  const handleToggleCamera = () => {
    setCameraPosition(cameraPosition === 'front' ? 'back' : 'front')
  }

  const handleToggleFlash = () => {
    if (!devices) return

    // se a camera for frontal, nao tem flash
    if(cameraPosition === 'front') {
      Alert.alert('Flash indisponível', 'Flash não está disponível na câmera frontal')
      return
    }

    setIsFlashOn(!isFlashOn)
  }

  const handleCloseCamera = () => {
    navigation.goBack()
  }

  const handleTakePicture = async () => {
    if (!camera.current) return

    const photo = await camera.current.takePhoto({
      flash: isFlashOn ? 'on' : 'off',
    })

    setPhotoUri(`file://${photo.path}`)
    setModalVisible(true)
  }

  const handleSavePhoto = (uri: string) => {
    editPhoto(uri)
    navigation.navigate('MyDetails')
  }

  // [ ] fazer mensagem de nao foi possivel - se nao tiver permissao, retorna null
  if (!permission || !devices) return (<View><Text>nao abriu</Text></View>)

  return (
    <SafeAreaView style={styles.root}>
      <VisionCamera
        device={devices}
        format={format}
        isActive={true}
        ref={camera}
        style={StyleSheet.absoluteFill}
        photo={true}
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

      {photoUri && (
        <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Image source={{ uri: photoUri }} style={{ flex: 1 }} />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setModalVisible(false)}
              >
                <XIcon size={32} color='white' />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSavePhoto(photoUri)}
              >
                <Check size={32} color='white' />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  )
}