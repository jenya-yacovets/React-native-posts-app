import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Platform } from 'react-native'

import MainScreeen from '../screens/main-screen'
import PostScreeen from '../screens/post-screen'
import THEME from '../theme'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ 
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR
                },
                headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
             }}
        >
            <Stack.Screen
                name="Main"
                component={MainScreeen}
                options={{ title: 'Мой блог' }}
            />
            <Stack.Screen
                name="Post"
                component={PostScreeen}
                options={{ title: 'Пост' }}
                initialParams={{ user: 'me' }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator