import { createTheming } from '@callstack/react-theme-provider';
import { Platform ,PixelRatio,Dimensions } from 'react-native';
import { getHeightPercent } from './ratio';


const screenHeight = Math.round(Dimensions.get('window').height);
const getFont = () => {
    var pr = PixelRatio.get();
    switch (true) {
        case pr * screenHeight >= 2100:
            return 14;
        case pr * screenHeight >= 1900:
            return 13;
        case pr * screenHeight >= 1400:
            return 12;
        case pr * screenHeight >= 1000:
            return 11;
        default:
            return 10;
    }
}

const getFlagSizeAndroid = () => {
    var pr = PixelRatio.get();
    switch (true) {
        case pr * screenHeight >= 2100:
            return 20;
        case pr * screenHeight >= 1900:
            return 19;
        case pr * screenHeight >= 1400:
            return 18;
        case pr * screenHeight >= 1000:
            return 17;
        default:
            return 16;
    }
}

const getFlagSizeDefault = () => {
    var pr = PixelRatio.get();
    switch (true) {
        case pr * screenHeight >= 2100:
            return 30;
        case pr * screenHeight >= 1900:
            return 28;
        case pr * screenHeight >= 1400:
            return 26;
        case pr * screenHeight >= 1000:
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