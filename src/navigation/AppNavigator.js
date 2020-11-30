import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import ListingsScreen from '../screen/ListingsScreen';
import ListingEditScreen from '../screen/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingsButton from './NewListingsButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Listings"
                component={FeedNavigator}
                options={{

                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name='home' color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="ListingsEdit"
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <NewListingsButton onPress={() => navigation.navigate('ListingsEdit')} />,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name='plus-circle' color={color} size={size} />

                }
                )

                }

            />
            <Tab.Screen
                name="Account"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name='account' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator
