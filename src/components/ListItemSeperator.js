import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

const ListItemSeperator = () => {
    return (
        <View style={styles.seprator}>

        </View>
    )
}

export default ListItemSeperator

const styles = StyleSheet.create({
    seprator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light,
    }

})
