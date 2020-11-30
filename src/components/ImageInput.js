import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors'

const ImageInput = ({ imageUri, onchangeImage }) => {
    useEffect(() => {
        requestPermission()

    }, [])
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library.");

    }
    const handlePress = () => {
        imageUri ?
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "Yes", onPress: () => onchangeImage(null) },
                { text: "No" },
            ])
            :
            selectImage()
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: .5
            })
            result.cancelled ? (null) : onchangeImage(result.uri)

        } catch (error) {
            console.log("Error reading an image", error);

        }
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {imageUri ?
                    <Image source={{ uri: imageUri }} style={styles.image} /> :
                    <MaterialCommunityIcons name='camera' size={50} color={colors.medium} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        height: 100,
        overflow: 'hidden',
        width: 100

    },
    image: {
        height: '100%',
        width: '100%',

    }
})
