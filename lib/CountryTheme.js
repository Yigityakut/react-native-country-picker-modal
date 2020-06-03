import { createTheming } from '@callstack/react-theme-provider';
import { Platform ,Dimensions } from 'react-native';
import { getHeightPercent } from './ratio';


const screenHeight = Math.round(Dimensions.get('window').height);
const getFont = () => {
    switch (true) {
        case screenHeight >= 800:
            return 14;
        case screenHeight >= 700:
            return 13;
        case screenHeight >= 600:
            return 12;
        case screenHeight >= 555:
            return 11;
        default:
            return 10;
    }
}

const getFlagSizeAndroid = () => {
    switch (true) {
        case screenHeight >= 800:
            return 20;
        case screenHeight >= 700:
            return 19;
        case screenHeight >= 600:
            return 18;
        case screenHeight >= 555:
            return 17;
        default:
            return 16;
    }
}

const getFlagSizeDefault = () => {
    switch (true) {
        case screenHeight >= 800:
            return 30;
        case screenHeight >= 700:
            return 28;
        case screenHeight >= 600:
            return 26;
        case screenHeight >= 555:
            return 25;
        default:
            return 24;
    }
}
export const DEFAULT_THEME = {
    primaryColor: '#ccc',
    primaryColorVariant: '#eee',
    backgroundColor: '#ffffff',
    onBackgroundTextColor: '#000000',
    fontSize: getFont(),
    fontFamily: Platform.select({
        ios: 'System',
        android: 'Roboto',
        web: 'Arial'
    }),
    filterPlaceholderTextColor: '#aaa',
    activeOpacity: 0.5,
    itemHeight: getHeightPercent(7),
    flagSize: Platform.select({ android: getFlagSizeAndroid(), default: getFlagSizeDefault() }),
    flagSizeButton: Platform.select({ android: getFlagSizeAndroid(), default: getFlagSizeDefault() })
};
export const DARK_THEME = {
    ...DEFAULT_THEME,
    primaryColor: '#222',
    primaryColorVariant: '#444',
    backgroundColor: '#000',
    onBackgroundTextColor: '#fff'
};
const { ThemeProvider, useTheme } = createTheming(DEFAULT_THEME);
export { ThemeProvider, useTheme };
//# sourceMappingURL=CountryTheme.js.map