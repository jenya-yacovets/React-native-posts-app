import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const MainScreeen = ({ navigation }) => {

    const goToPost = () => {
        navigation.navigate('Post')
    }

    return(
        <View style={ styles.center }>
            <Text>Main screen</Text>
            <Button onPress={goToPost} title="Перейти в пост" />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainScreeen