import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppPicker from '../AppPicker'
import PickerItem from '../PickerItem'
import ErrorMessage from './ErrorMessage'

function AppFormPicker({ items, numberOfColumns, PickerItemComponent, placeholder, type, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(type, item)}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[type]}
                width={width}
            />
            <ErrorMessage error={errors[type]} visible={touched[type]} />
        </>
    );
}
export default AppFormPicker

const styles = StyleSheet.create({})
