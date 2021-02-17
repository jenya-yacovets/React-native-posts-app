import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigation/app-navigation'
import store from './src/store'
import bootstrap from './src/bootstrap'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  const [fontsLoaded] = useFonts({
    openSansReqular: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    openSansLight: require('./assets/fonts/OpenSans-Light.ttf')
  })

  if (!isReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  )
}