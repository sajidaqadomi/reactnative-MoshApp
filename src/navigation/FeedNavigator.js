import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import ListingsScreen from '../screen/ListingsScreen';
import ListingDetailsScreen from '../screen/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
    return (
        <Stack.Navigator mode='modal' screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen
                name="Listings"
                component={ListingsScreen}
            />
            <Stack.Screen
                name="ListingsDetails"
                component={ListingDetailsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default FeedNavigator
