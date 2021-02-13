import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '../data'
import AppHeaderIcon from '../components/app-header-icon'
import PostList from '../components/post-list'

const BookmarkedScreeen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Toggle Drawer'
                        iconName='ios-menu'
                    // onPress={}
                    />
                </HeaderButtons>
            )
        })
    }, [])

    const onOpen = (post) => {
        navigation.navigate('Post', { postId: post.id })
    }

    return <PostList posts={DATA.filter(post => post.booked)} onOpen={onOpen} />
}


export default BookmarkedScreeen