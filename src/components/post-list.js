import React from 'react'
import { View, StyleSheet } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'
import Post from '../components/post'

const PostList = ({ posts, onOpen }) => {
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
    }
})

export default PostList