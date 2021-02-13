import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Post = ({ post, onOpen }) => {

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{ uri: post.img }}>
                    <View style={styles.textBlock}>
                        <Text style={styles.text}>{new Date(post.date).toLocaleDateString()}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        marginVertical: 7,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textBlock: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: '#fff',
        fontFamily: 'openSansReqular'
    }
})
export default Post