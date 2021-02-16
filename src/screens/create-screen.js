import React, { useLayoutEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'

import AppHeaderIcon from '../components/app-header-icon'
import AppButton from '../components/ui/app-buttons'

const CreateScreeen = ({ navigation }) => {

    const [text, setText] = useState('')

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

    const createPost = () => {

    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Создание поста</Text>
            <TextInput
                style={styles.textArea}
                placeholder="Тест поста...."
                value={text}
                onChangeText={setText}
                multiline
            />
            <Image
                style={{ width: '100%', height: 200 }}
                source={{ uri: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg' }}
            />
            <AppButton
                style={styles.button}
                onPress={createPost}
            >Опубликовать</AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'openSansReqular',
        marginVertical: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ccc'
    },
    button: {
        marginTop: 10
    }
})

export default CreateScreeen