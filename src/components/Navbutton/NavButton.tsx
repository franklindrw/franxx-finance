import React from 'react';
import { LucideIcon } from 'lucide-react-native';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './navButton.style';

interface NavButtonProps {
  text: string;
  Icon: LucideIcon;
  onPress?: () => void;
}

export default function({ text, Icon, onPress }: NavButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon size={18} color='white' />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
