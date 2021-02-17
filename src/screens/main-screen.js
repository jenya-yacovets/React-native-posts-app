import React, { useEffect, useLayoutEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import AppHeaderIcon from '../components/app-header-icon'
import PostList from '../components/post-list'
import { loadPosts } from '../store/actions/post'
import THEME from '../theme'

export default function MainScreen({ navigation }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Take Photo'
                        iconName='ios-camera'
                        onPress={() => { navigation.navigate('Create') }}
                    />
                </HeaderButtons>
            ),
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

    const onOpen = (post) => {
        navigation.navigate('Post', { postId: post.id })
    }

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator color={THEME.MAIN_COLOR} />
            </View>
        )
    }
    return <PostList posts={allPosts} onOpen={onOpen} />
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})