import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppFormField, SubmitButton, AppForm } from '../components/forms'
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
const LoginScreen = () => {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        console.log(result.data, 'result')
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
    };

    return (
        <Screen style={styles.screen}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}


            >
                <AppFormField
                    type='email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Email'
                    textContentType='emailAddress'
                    icon='email'
                />
                <AppFormField
                    autoCorrect={false}
                    autoCapitalize='none'
                    icon='lock'
                    secureTextEntry
                    placeholder='Password'
                    textContentType='password'
                    type='password'


                />

                <SubmitButton title='login' />

            </AppForm>


        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20

    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,

    }

})
