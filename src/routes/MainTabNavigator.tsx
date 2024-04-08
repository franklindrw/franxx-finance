import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, AreaChartIcon, ClipboardListIcon, UserRoundIcon } from "lucide-react-native";
import { styles } from "./mainTabNavigator.style";
import { theme } from "../theme/theme";

import Home from "../screens/Home/Home";
import Analitico from "../screens/Analitico/Analitico";
import Historico from "../screens/Historico/Historico";
import User from "../screens/User/User";

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
        tabBarStyle: {
          paddingTop: theme.sizes.lg,
          backgroundColor: theme.colors.tertiary,
          borderTopColor: 'transparent',
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