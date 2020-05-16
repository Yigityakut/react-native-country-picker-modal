import React from 'react';
import { Image, TouchableNativeFeedback, View, Platform, TouchableOpacity, StyleSheet,
    Dimensions,
    PixelRatio } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from './CountryTheme';


const screenHeight = Math.round(Dimensions.get('window').height);
const getButtonSize = () => {
    var pr = PixelRatio.get();
    switch (true) {
        case pr * screenHeight >= 2100:
            return 25;
        case pr * screenHeight >= 1900:
            return 23;
        case pr * screenHeight >= 1400:
            return 20;
        case pr * screenHeight >= 1000:
            return 18;
        default:
            return 16;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: getButtonSize(),
        width: getButtonSize(),
        resizeMode: 'contain'
    }
});
const CloseButtonAndroid = (props) => {
    let closeImage = require('./assets/images/close.android.png');
    if (props.image) {
        closeImage = props.image;
    }
    const { onBackgroundTextColor } = useTheme();
    return (React.createElement(View, { style: [styles.container, props.style] },
        React.createElement(TouchableNativeFeedback, { background: Platform.Version < 21
                ? TouchableNativeFeedback.SelectableBackground()
                : TouchableNativeFeedback.SelectableBackgroundBorderless(), onPress: props.onPress },
            React.createElement(View, null,
                React.createElement(Image, { source: closeImage, style: [
                        styles.imageStyle,
                        props.imageStyle,
                        { tintColor: onBackgroundTextColor }
                    ] })))));
};
const CloseButtonIOS = (props) => {
    let closeImage = require('./assets/images/close.ios.png');
    if (props.image) {
        closeImage = props.image;
    }
    const { onBackgroundTextColor } = useTheme();
    return (React.createElement(View, { style: [styles.container, props.style] },
        React.createElement(TouchableOpacity, { onPress: props.onPress },
            React.createElement(Image, { source: closeImage, style: [
                    styles.imageStyle,
                    props.imageStyle,
                    { tintColor: onBackgroundTextColor }
                ] }))));
};
const propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.any
};
CloseButtonIOS.prototype = propTypes;
CloseButtonAndroid.prototype = propTypes;
export default Platform.select({
    ios: CloseButtonIOS,
    android: CloseButtonAndroid,
    web: CloseButtonIOS
});
//# sourceMappingURL=CloseButton.js.map