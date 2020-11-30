import { DefaultTheme } from '@react-navigation/native'
import ColorPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import colors from '../config/colors'

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primar: colors.primary,
        background: colors.white
    }

}