import React from 'react';
import { View } from 'react-native';
import { useLoadFonts } from './src/theme/fonts';
import Providers from './src/shared/contexts/Providers'
import Routes from './src/routes/routes';

export default function App() {
  const [fontsLoaded] = useLoadFonts();

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
