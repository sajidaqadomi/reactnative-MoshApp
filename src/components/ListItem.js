import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import colors from '../config/colors'
import AppText from './AppText'

const ListItem = ({ image, IconComponent, title, subTitle, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'

    },
    detailsContainer: {
        marginLeft: 10,
        flex: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,

    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium
    }

})
