import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useLoadFonts } from './src/theme/fonts';
import Routes from './src/routes/routes';

export default function App() {
  const [fontsLoaded] = useLoadFonts();

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
