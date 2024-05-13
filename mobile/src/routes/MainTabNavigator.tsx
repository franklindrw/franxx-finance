import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, AreaChartIcon, ClipboardListIcon, UserRoundIcon } from "lucide-react-native";
import { styles } from "./mainTabNavigator.style";
import { theme } from "../theme/theme";

import Home from "../app/Home/screen/Home";
import Analitico from "../app/Analitico/screen/Analitico";
import Historico from "../app/Historico/screen/Historico";
import User from "../app/User/User";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {

  return (
    <Tab.Navigator
      initialRouteName="Início"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginBottom: theme.sizes.md,
        },
        tabBarStyle: {
          height: 80,
          paddingTop: theme.sizes.lg,
          backgroundColor: theme.colors.tertiary,
          borderTopColor: theme.colors.tertiary,
          paddingBottom: theme.sizes.lg,
        }
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[ styles.tabIcon, focused && styles.tabIconActive ]}>
              <HomeIcon size={size} color={color} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Analítico"
        component={Analitico}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[ styles.tabIcon, focused && styles.tabIconActive ]}>
              <AreaChartIcon size={size} color={color} />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Histórico"
        component={Historico}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[ styles.tabIcon, focused && styles.tabIconActive ]}>
              <ClipboardListIcon size={size} color={color} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Usuário"
        component={User}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[ styles.tabIcon, focused && styles.tabIconActive ]}>
              <UserRoundIcon size={size} color={color} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}