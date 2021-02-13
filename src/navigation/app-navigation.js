import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainScreeen from '../screens/main-screen'
import PostScreeen from '../screens/post-screen'
import THEME from '../theme'
import BookmarkedScreeen from '../screens/bookmarked-screen'
import AboutScreeen from '../screens/about-screen'
import CreateScreeen from '../screens/create-screen'

const screenOptions = {
    gestureEnabled: true,
    headerBackTitleVisible: false,
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR
    },
    headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
}

const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="Main"
                component={MainScreeen}
                options={{
                    title: 'Мой блог'
                }}
            />
            <Stack.Screen
                name="Post"
                component={PostScreeen}
            />
        </Stack.Navigator>
    )
}

const BookedNavigator = createStackNavigator()
const StackBottomNavigator = () => {
    return (
        <BookedNavigator.Navigator
            screenOptions={screenOptions}
        >
            <BookedNavigator.Screen
                name="Booked"
                component={BookmarkedScreeen}
                options={{
                    title: 'Избранное'
                }}
            />
            <BookedNavigator.Screen
                name="Post"
                component={PostScreeen}
            />
        </BookedNavigator.Navigator>
    )
}

let tabFunction
let tabBarOptionsIos = {}
let tabBarOptionsAndroid = {}
let colorIcon

if (Platform.OS === 'ios') {
    tabFunction = createBottomTabNavigator
    tabBarOptionsIos = {
        activeTintColor: THEME.MAIN_COLOR,
    }
    colorIcon = THEME.MAIN_COLOR
} else {
    tabFunction = createMaterialBottomTabNavigator
    tabBarOptionsAndroid = {
        activeColor: '#fff',
        shifting: true,
        barStyle: {
            backgroundColor: THEME.MAIN_COLOR
        }
    }
    colorIcon = '#fff'
}

const Tab = tabFunction()
const TabNavigator = () => {
    return (
        <Tab.Navigator {...tabBarOptionsAndroid}
            tabBarOptions={tabBarOptionsIos}
        >
            <Tab.Screen
                name="Post"
                component={StackNavigator}
                options={{
                    tabBarLabel: "Все",
                    tabBarIcon: ({ color, size }) => <Ionicons name="ios-albums" size={size || 25} color={color} />
                }}
            />
            <Tab.Screen
                name="Booked"
                component={StackBottomNavigator}
                options={{
                    tabBarLabel: "Избранное",
                    tabBarIcon: ({ color, size }) => <Ionicons name="ios-star" size={size || 25} color={color} />
                }}
            />

        </Tab.Navigator>
    )
}

const AboutNavigatorStack = createStackNavigator()
const AboutNavigator = () => {
    return (
        <AboutNavigatorStack.Navigator
            screenOptions={screenOptions}
        >
            <AboutNavigatorStack.Screen
                name="About"
                component={AboutScreeen}
                options={{
                    title: 'О приложении'
                }}
            />
        </AboutNavigatorStack.Navigator>
    )
}

const CreateNavigatorStack = createStackNavigator()
const CreateNavigator = () => {
    return (
        <CreateNavigatorStack.Navigator
            screenOptions={screenOptions}
        >
            <CreateNavigatorStack.Screen
                name="Create"
                component={CreateScreeen}
                options={{
                    title: 'Создание поста'
                }}
            />
        </CreateNavigatorStack.Navigator>
    )
}

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContentOptions={{
                activeTintColor: THEME.MAIN_COLOR,
                labelStyle: {
                    fontFamily: 'openSansBold'
                }
            }}
        >
            <Drawer.Screen name="PostTabs" component={TabNavigator}
                options={{
                    title: 'Список постов',
                    drawerIcon: ({ color, size }) => <Ionicons name="ios-newspaper-outline" size={size || 25} color={color} />
                }} />
            <Drawer.Screen name="About" component={AboutNavigator} options={{
                title: 'О приложении',
                drawerIcon: ({ color, size }) => <Ionicons name="ios-bulb-outline" size={size || 25} color={color} />
            }} />
            <Drawer.Screen name="Create" component={CreateNavigator} options={{
                title: 'Создание поста',
                drawerIcon: ({ color, size }) => <Ionicons name="ios-create-outline" size={size || 25} color={color} />
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator