import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const AppText = ({ children, style, ...otherProps }) => {
    return (
        <Text style={{ ...styles.text, ...style }} {...otherProps}>{children}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})
