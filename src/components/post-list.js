import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'
import Post from '../components/post'

const PostList = ({ posts, onOpen }) => {

    if (!posts.length) {
        return(
            <View style={styles.wrapper}>
                <Text style={styles.text}>Постов еще нет</Text>
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={posts}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10
    },
    text: {
        textAlign: 'center',
        fontFamily: 'openSansLight',
        fontSize: 18,
        marginVertical: 20
    }
})

export default PostList