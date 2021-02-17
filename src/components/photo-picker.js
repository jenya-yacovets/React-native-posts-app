import React, { useState, useEffect } from 'react';
import { Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from './ui/app-buttons';

export default function PhotoPicker({ onPicker }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
            onPicker(result.uri)
        }

    }

    return (
        <View style={styles.wrapper}>
            <AppButton onPress={pickImage}>Выбрать фото</AppButton>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20
    },
    image: {
        marginTop: 10,
        width: '100%',
        height: 200
    }
})