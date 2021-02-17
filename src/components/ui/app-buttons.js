import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, View, StyleSheet, Platform, Text } from 'react-native'

import THEME from '../../theme'

const AppButton = ({ children, onPress, disabled, style, color = THEME.MAIN_COLOR }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return (
        <Wrapper onPress={onPress} disabled={disabled} activeOpacity={0.75}>
            <View style={{ ...styles.button, backgroundColor: color, ...style }}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontFamily: 'openSansReqular'
    }
})

export default AppButton