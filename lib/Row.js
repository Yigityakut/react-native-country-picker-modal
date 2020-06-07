import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {dp} from './DevicePixel';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
export const Row = (props) => (React.createElement(View, Object.assign({}, props, { style: [
        styles.row,
        props.style,
        props.fullWidth && {
            width: '100%',
            justifyContent: 'space-between',
            padding: dp(10),
            paddingHorizontal: dp(50)
        }
    ] })));
//# sourceMappingURL=Row.js.map