import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from '@rneui/themed';
import { styles } from "./heading.style";
import { Bell } from 'lucide-react-native';

interface HeadingProps {
  name: string;
  src?: string;
  notifications?: number;
  userAction?: () => void;
}

export default function Heading({ name, src, userAction, notifications = 0 }: HeadingProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.flex_container} onPress={userAction}>
        <Avatar size={48} source={{ uri: src }} rounded />
        <View>
          <Text style={styles.subtitle}>Bem vindo,</Text>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        {notifications > 0 && (
          <View style={styles.notification}>
            <Text style={styles.notification_text}>{notifications}</Text>
          </View>
        )}
        <Bell size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}