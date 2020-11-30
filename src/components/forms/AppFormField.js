import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({ type, width, ...otherProps }) => {
    const { setFieldTouched, touched, handleChange, errors, setFieldValue, values } = useFormikContext()
    return (
        <>
            <AppTextInput
                width={width}
                // onChangeText={handleChange(type)}
                onChangeText={(text) => setFieldValue(type, text)}
                value={values[type]}
                onBlur={() => setFieldTouched(type)}
                {...otherProps}

            />
            <ErrorMessage error={errors[type]} visible={touched[type]} />
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})
