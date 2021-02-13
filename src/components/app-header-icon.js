import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import THEME from '../theme'

const AppHeaderIcon = (props) => {
    return (
        <HeaderButton
            {...props}
            iconSize={24}
            color={Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'}
            IconComponent={Ionicons}
        />
    )
}

export default AppHeaderIcon