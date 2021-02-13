import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import MainScreeen from '../screens/main-screen'
import PostScreeen from '../screens/post-screen'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="Main"
                component={MainScreeen}
                options={{ title: 'Мой блог' }}
            />
            <Stack.Screen
                name="Post"
                component={PostScreeen}
                // options={{ title: 'Пост' }}
                initialParams={{ user: 'me' }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator