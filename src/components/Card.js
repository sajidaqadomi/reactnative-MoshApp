import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Image } from "react-native-expo-image-cache";



import colors from '../config/colors'
import AppText from './AppText'

const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
                <Image uri={imageUrl} style={styles.image} preview={{ uri: thumbnailUrl }} tint='light' />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: colors.white,
        // marginBottom: 20,
        overflow: 'hidden',
        margin: 20,
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200
    },
    subTitle: {
        color: 'green',
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7
    },
})
