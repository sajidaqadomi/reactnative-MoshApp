import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import MessagesScreen from '../screen/MessagesScreen';
import AccountScreen from '../screen/AccountScreen';

const Stack = createStackNavigator()

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Account' component={AccountScreen} />
            <Stack.Screen name='Messages' component={MessagesScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator
