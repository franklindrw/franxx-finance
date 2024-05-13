import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Bell } from 'lucide-react-native';

import UserAvatar from "../../../../infra/UserAvatar/UserAvatar";

import { styles } from "./heading.style";

interface HeadingProps {
  name: string;
  photo?: string;
  notifications?: number;
  userAction?: () => void;
}

export default function Heading({ name, photo, userAction, notifications = 0 }: HeadingProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.flex_container} onPress={userAction}>
        <UserAvatar
          name={name}
          uri={photo}
          size={48}
        />
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