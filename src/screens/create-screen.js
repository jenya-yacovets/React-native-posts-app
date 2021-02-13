import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, Text } from 'react-native'

import AppHeaderIcon from '../components/app-header-icon'

const CreateScreeen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Toggle Drawer'
                    iconName='ios-menu'
                    onPress={() => { navigation.toggleDrawer() }}
                    />
                </HeaderButtons>
            )
        })
    }, [])

    return (
        <View>
            <Text>Создание поста</Text>
        </View>
    )
}

export default CreateScreeen