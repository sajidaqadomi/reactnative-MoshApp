import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import { Image } from "react-native-expo-image-cache";

const ListingDetailsScreen = ({ route }) => {
    console.log(route.params, 'details')
    const { id, images, price, title } = route.params
    return (
        <View>
            {/* <Image source={{ uri: images[0].url }} style={styles.image} /> */}
            <Image uri={images[0].url} style={styles.image} preview={{ uri: images[0].thumbnailUrl }} tint='light' />



            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>$ {price}</AppText>

                <View style={styles.listContainert}>
                    <ListItem
                        image={require('../../assets/mosh.jpg')}
                        title='Mosh Hamdini'
                        subTitle='5 Listings'
                    />
                </View>
            </View>

        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500",

    },
    detailsContainer: {
        padding: 20,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    }


})
