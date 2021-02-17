import React, { useLayoutEffect, useState, useRef } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import AppHeaderIcon from '../components/app-header-icon'
import AppButton from '../components/ui/app-buttons'
import { addPost } from '../store/actions/post'
import PhotoPicker from '../components/photo-picker'

const CreateScreeen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const imageUri = useRef()

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

    const pickerHandler = (uri) => {
        imageUri.current = uri
    }

    const createPost = () => {
        const post =   {
            img: imageUri.current,
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
                    <PhotoPicker onPicker={pickerHandler} />
                    <AppButton
                        style={styles.button}
                        onPress={createPost}
                        // disabled={!text || !name || !imageUri}
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