import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Avatar } from '@rneui/themed'
import { CameraIcon } from 'lucide-react-native'

import { styles } from './userAvatar.style'
const avatar = 'https://github.com/Franklindrw.png'
interface UserAvatarProps {
  size?: number
  uri?: string | null
  name: string
  edit?: boolean
  navigation?: any
}

const UserAvatar = ({ size = 72, uri, name, edit = false, navigation }: UserAvatarProps) => {
  // pega as iniciais do primeiro e ultimo nome
  const nameParts = name.split(' ')
  const initials = nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)

  // acao para ir para tela da camera
  const handleCamera = () => {
    navigation.navigate('Camera')
  }

  return (
    <>
      <TouchableOpacity
        style={styles.root}
        onPress={handleCamera}
        disabled={!edit}
      >
        <Avatar
          containerStyle={styles.avatar}
          rounded
          size={size}
          source={{ uri: uri ?? avatar }}
          title={initials}
        >
          <View style={[styles.camButton, !edit && styles.camDisabled]}>
            <CameraIcon size={24} color='white' />
          </View>
        </Avatar>
      </TouchableOpacity>
    </>
  )
}

export default UserAvatar