import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from '../../style/WMStyles'

type CircleIconProps = {
    icon: IconProp 
    color?: string
    bgColor?: string
    size?: number
    marginLeft?: number
    marginRight?: number
    circleSize?: number
    onPress?: () => void
}

const CircleIcon = ({
    icon,
    color = Styles.color.white,
    bgColor = Styles.color.gray.x_dark,
    size = 11,
    circleSize = 16,
    marginLeft = 0,
    marginRight = 0,
    onPress
}: CircleIconProps) => {
    const styles = StyleSheet.create({
        iconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: circleSize,
            width: circleSize,
            borderRadius: 100/2,
            backgroundColor: bgColor,
            fontSize: size,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: 0,
            marginBottom: 0,
            '&:hover': {
                cursor: 'pointer'
            }
        }
});
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} color={color} />
            </View>
        </TouchableWithoutFeedback>
    );
} 



export default CircleIcon;