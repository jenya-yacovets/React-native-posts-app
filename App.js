import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigation/app-navigation'
import store from './src/store'

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
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  )
}