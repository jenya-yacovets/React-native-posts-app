import React, { useLayoutEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import AppHeaderIcon from '../components/app-header-icon'
import AppButton from '../components/ui/app-buttons'
import { addPost } from '../store/actions/post'

const CreateScreeen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [name, setName] = useState('')

    const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

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
        const post =   {
            img,
            name: name,
            text: text,
            date: new Date().toJSON(),
            booked: false
          }
        dispatch(addPost(post))
        setText('')
        setName('')
        navigation.navigate('Main')
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Создание поста</Text>
                    <TextInput
                        style={styles.name}
                        placeholder="Название поста...."
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.textArea}
                        placeholder="Тест поста...."
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: img }}
                    />
                    <AppButton
                        style={styles.button}
                        onPress={createPost}
                    >Опубликовать</AppButton>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
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
    name: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ccc'
    },
    button: {
        marginTop: 10
    }
})

export default CreateScreeen