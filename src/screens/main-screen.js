import React from 'react'
import { View, StyleSheet } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'
import Post from '../components/post'
import { DATA } from '../data'

const MainScreeen = ({ navigation }) => {

    const onOpen = (post) => {
        navigation.navigate('Post', { postId: post.id})
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
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

export default MainScreeen