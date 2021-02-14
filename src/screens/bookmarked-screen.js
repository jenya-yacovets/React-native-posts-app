import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import AppHeaderIcon from '../components/app-header-icon'
import PostList from '../components/post-list'

const BookmarkedScreeen = ({ navigation }) => {

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
    }, [navigation])

    const onOpen = (post) => {
        navigation.navigate('Post', { postId: post.id })
    }

    const bookedPosts = useSelector(state => state.post.bookedPosts)

    return <PostList posts={ bookedPosts } onOpen={onOpen} />
}


export default BookmarkedScreeen