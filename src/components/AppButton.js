import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../config/colors'

const AppButton = ({ title, onPress, color = 'primary' }) => {
    return (
        <TouchableOpacity style={{ ...styles.button, backgroundColor: colors[color] }} onPress={onPress}>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 25,
        // backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',


    }
})
