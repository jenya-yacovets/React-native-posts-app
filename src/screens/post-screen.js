import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Image, Text, ScrollView, Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AppButton from '../components/ui/app-buttons'
import { DATA } from '../data'
import THEME from '../theme'
import AppHeaderIcon from '../components/app-header-icon'

const PostScreeen = ({ navigation, route: { params } }) => {
    const id = params.postId
    const post = DATA.find(item => item.id === id)

    let iconName = 'ios-star'

    if (!post.booked) {
        iconName = 'ios-star-outline'
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `Пост - ${post.text}`,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Take Photo'
                    iconName={iconName}
                    // onPress={}
                    />
                </HeaderButtons>
            ),
        })
    }, [])

    const removeHandler = () => {

        Alert.alert(
            "Удаление поста",
            `Вы действительно хотите удалить пост "${post.name}"?`,
            [
                {
                    text: "Отмена",
                    style: "cancel"
                },
                { text: "OK", style: 'destructive', onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        )
    }

    return (
        <ScrollView style={styles.content}>
            <Image style={styles.image} source={{ uri: post.img }} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{post.name}</Text>
                <Text style={styles.date}>Дата публикации: {new Date(post.date).toLocaleDateString()}</Text>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <AppButton style={styles.button} color={THEME.DANGER_COLOR} onPress={removeHandler}>Удалить</AppButton>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    textContainer: {
        padding: 10
    },
    name: {
        fontSize: 22,
        fontFamily: 'openSansBold',
    },
    date: {
        fontSize: 14,
        fontFamily: 'openSansLight',
        paddingVertical: 12
    },
    text: {
        fontSize: 15,
        fontFamily: 'openSansReqular'
    },
    button: {
        marginBottom: 15
    }
})

export default PostScreeen