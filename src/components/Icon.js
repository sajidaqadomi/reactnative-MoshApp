import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Icon = ({
    name,
    size = 40,
    iconColor = '#fff',
    backgroundColor = '#000' }) => {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size * .5,
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <MaterialCommunityIcons name={name} size={size * .5} color={iconColor} />
        </View>
    )
}

export default Icon

const styles = StyleSheet.create({})
