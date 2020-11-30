import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'


const NewListingsButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={colors.white} size={30} />
            </View>
        </TouchableOpacity>
    )
}

export default NewListingsButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderWidth: 10,
        borderColor: colors.white,
        bottom: 15,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: 'center',
    }
})
