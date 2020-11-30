import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
    return (
        <View style={{ ...styles.container, width }}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    icon: {
        marginRight: 10

    },
    // input: {
    //     fontSize: 18,
    //     fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    //     color: colors.dark


    // }
})
