import React, { useLayoutEffect, useState, useRef } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import AppHeaderIcon from '../components/app-header-icon'
import AppButton from '../components/ui/app-buttons'
import { addPost } from '../store/actions/post'
import PhotoPicker from '../components/photo-picker'

const CreateScreeen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState(null)

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
        const post = {
            img: image,
            name: name,
            text: text,
            date: new Date().toJSON(),
            booked: false
        }
        dispatch(addPost(post))
        navigation.goBack()
        setText('')
        setName('')
        setImage(null)
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
                    <PhotoPicker onPicker={setImage} />
                    {image && <Image source={{ uri: image }} style={styles.image} />}
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
    },
    image: {
        marginBottom: 20,
        width: '100%',
        height: 200
    }
})

export default CreateScreeen