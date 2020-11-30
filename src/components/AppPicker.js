import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({
    icon,
    items,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    onSelectItem,
    width = '100%'
}) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={{ ...styles.container, width }}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon} />
                    }

                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={defaultStyles.colors.medium}
                    />

                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={modalVisible}
                animationType='slide'
            >
                <Screen>
                    <Button title='close modal' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }


                                }
                            />
                        )

                        }
                    />
                </Screen>

            </Modal>
        </>
    )
}

export default AppPicker

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
    text: {
        flex: 1
    }
    // input: {
    //     fontSize: 18,
    //     fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    //     color: colors.dark


    // }
})
