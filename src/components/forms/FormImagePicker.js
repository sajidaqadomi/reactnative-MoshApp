
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'

import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'


const FormImagePicker = ({ type }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const handleAdd = (uri) => {
        setFieldValue(type, [...values[type], uri])
    }

    const handleRemove = (uri) => {
        setFieldValue(type, [...values[type].filter((imguri) => imguri !== uri)])
    }

    return (
        <>
            <ImageInputList
                imageUris={values[type]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}

            />
            <ErrorMessage error={errors[type]} visible={touched[type]} />
        </>
    )
}

export default FormImagePicker

const styles = StyleSheet.create({})
