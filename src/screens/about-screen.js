import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, Text, StyleSheet } from 'react-native'

import AppHeaderIcon from '../components/app-header-icon'

const AboutScreeen = ({ navigation }) => {

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
        <View style={styles.content}>
            <Text style={styles.text}>Приложение создано в учебных целях</Text>
            <Text style={styles.text}>Создатель: <Text style={styles.bold}>Jenya Yacovets</Text></Text>
            <Text style={styles.text}>Версия: <Text style={styles.bold}>1.0.0</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'openSansReqular',
        fontSize: 16
    },
    bold: {
        fontFamily: 'openSansBold'
    }
})

export default AboutScreeen