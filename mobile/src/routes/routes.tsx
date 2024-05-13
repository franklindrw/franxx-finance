import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../app/Welcome/screen/Welcome";
import Login from "../app/Login/screen/Login";
import Register from "../app/Register/screen/Register";
import MainTabNavigator from "./MainTabNavigator";
import Unsubscribe from "../app/Unsubscribe/Unsubscribe";
import MyDetails from "../app/MyDetails/screen/MyDetails";
import Camera from "../infra/Camera/Camera";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Unsubscribe" component={Unsubscribe} />
        <Stack.Screen name="MyDetails" component={MyDetails} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
