import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = () => {

    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        // console.log('userInfo', userInfo)
        const result = await registerApi.request(userInfo);
        // console.log(result, 'result')

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                //console.log(result);
            }
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        //  console.log(authToken, 'authToken')
        auth.logIn(authToken);
    };


    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />

            <Screen style={styles.screen}>
                <AppForm
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <AppFormField
                        autoCorrect={false}
                        icon="account"
                        type="name"
                        placeholder="Name"
                    />
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

                    <SubmitButton title='regiter' />

                </AppForm>
            </Screen>
        </>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20

    }
})
