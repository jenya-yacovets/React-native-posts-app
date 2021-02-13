import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigator from './src/navigation/app-navigation'

export default function App() {

  const [fontsLoaded] = useFonts({
    openSansReqular: require('./assets/fonts/OpenSans-Regular.ttf')
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