import React from 'react'
import { SafeAreaView, StyleSheet, Platform, View } from 'react-native'

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={{ ...styles.screen, ...style }}>
            <View style={{ ...styles.view, ...style }}>{children}</View>
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        flex: 1,
    },
    view: {
        flex: 1

    }
})
