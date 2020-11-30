import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppText from '../AppText'

const ErrorMessage = ({ error, visible }) => {
    return (
        <>
            {error && visible ? <AppText style={styles.error}>{error}</AppText> : null}
        </>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})
