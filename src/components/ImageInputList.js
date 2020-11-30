import React, { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris, onRemoveImage, onAddImage }) => {
    // console.log('urs', imageUris)
    const scrollView = useRef()
    return (
        <View>
            <ScrollView
                style={{ backgroundColor: 'red' }}
                horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container} >
                    {
                        imageUris.map((uri) => (
                            <View key={uri} style={styles.img}>
                                <ImageInput
                                    imageUri={uri}
                                    onchangeImage={() => onRemoveImage(uri)}

                                />
                            </View>
                        )

                        )
                    }
                    <ImageInput
                        onchangeImage={onAddImage}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    img: {
        marginRight: 10

    }
})
