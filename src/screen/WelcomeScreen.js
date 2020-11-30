import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'

import colors from '../config/colors'

const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (

        <ImageBackground
            blurRadius={4}
            source={require('../../assets/background.jpg')}
            style={styles.backgroundImage}>
            <View style={styles.logoContainer} >
                <Image source={require('../../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='login' onPress={() => navigation.navigate('Login')} />
                <AppButton title='register' onPress={() => navigation.navigate('Register')} color='secondary' />
            </View>
            {/* <View style={styles.loginButton}><Text>login</Text></View> */}
            {/* <View style={styles.signupButton}><Text>signup</Text></View> */}

        </ImageBackground>

    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: "center"

    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center'


    },
    logo: {
        //  alignItems: 'center',
        width: 100,
        height: 100
    },
    tagLine: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20


    }


})
