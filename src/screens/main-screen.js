import React, { useEffect, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import AppHeaderIcon from '../components/app-header-icon'
import PostList from '../components/post-list'
import { loadPosts } from '../store/actions/post'

const MainScreeen = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

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
    }, [navigation])

    const onOpen = (post) => {
        navigation.navigate('Post', { postId: post.id })
    }

    const allPosts = useSelector(state => state.post.allPosts)

    return <PostList posts={allPosts} onOpen={onOpen} />
}

export default MainScreeen