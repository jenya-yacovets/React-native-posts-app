import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigator from './src/navigation/app-navigation'

export default function App() {

  const [fontsLoaded] = useFonts({
    openSansReqular: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    openSansLight: require('./assets/fonts/OpenSans-Light.ttf')
  })


  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}