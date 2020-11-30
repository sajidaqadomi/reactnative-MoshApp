import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import Text from './AppText'
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
    let netInfo = useNetInfo()
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>NO Internet Connection</Text>
            </View>
        )
    return null
}

export default OfflineNotice

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: "center",
        position: "absolute",
        top: Constants.statusBarHeight,
        width: "100%",
        zIndex: 1,

    },
    text: {
        color: colors.white,
    },
})
