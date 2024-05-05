import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Avatar } from '@rneui/themed'
import { Camera } from 'lucide-react-native'

import { styles } from './userAvatar.style'

// "https://github.com/franklindrw.png"

interface UserAvatarProps {
  size?: number
  uri?: string
  name: string
  edit?: boolean
}

const UserAvatar = ({ size = 72, uri, name, edit = false }: UserAvatarProps) => {
  // pega as iniciais do primeiro e ultimo nome
  const nameParts = name.split(' ')
  const initials = nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => console.log('clicou')}
      disabled={!edit}
    >
      <Avatar
        containerStyle={styles.avatar}
        rounded
        size={size}
        source={{ uri: uri }}
        title={initials}
      >
        <View style={[styles.camButton, !edit && styles.camDisabled]}>
          <Camera size={24} color='white' />
        </View>
      </Avatar>
    </TouchableOpacity>
  )
}

export default UserAvatar