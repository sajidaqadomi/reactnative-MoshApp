import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native'


import colors from '../config/colors';



const UploadScreen = ({ onDone, progress, visible }) => {
    return (
        <View>
            <Modal visible={visible}>
                <View style={styles.container}>
                    {progress < 1 ? (
                        <Progress.Bar Progress={progress} width={200} color={colors.primary} />
                    ) : (
                            <LottieView
                                autoPlay
                                loop={false}
                                onAnimationFinish={onDone}
                                style={styles.animation}
                                source={require('../../assets/animations/done.json')}
                            />
                        )}
                </View>
            </Modal>
        </View>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    animation: {
        width: 150

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
