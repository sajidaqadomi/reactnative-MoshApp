import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';



const ListingsScreen = ({ navigation }) => {
    // const [listings, setListings] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    const getListingsApi = useApi(listingsApi.getListings)

    useEffect(() => {
        getListingsApi.request()
    }, [])

    // const loadListings = async () => {
    //     setLoading(true)
    //     const response = await listingsApi.getListings()
    //     setLoading(false)

    //     if (!response.ok) return setError(true)
    //     setError(false)
    //     setListings(response.data);

    // }
    return (
        <Screen style={styles.screen}>
            <ActivityIndicator visible={getListingsApi.loading} />
            {  getListingsApi.error && (
                <>
                    <AppText>Could not retrieve the listings .</AppText>
                    <AppButton
                        title='Retry'
                        onPress={getListingsApi.request()}
                    />
                </>
            )
            }
            {
                !getListingsApi.loading && !getListingsApi.error && <FlatList
                    data={getListingsApi.data}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subTitle={`$ ${item.price}`}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate('ListingsDetails', item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    )
                    }
                />
            }
        </Screen >

    )
}

export default ListingsScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    }
})
