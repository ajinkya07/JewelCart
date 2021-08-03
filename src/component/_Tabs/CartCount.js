import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import color from '@values/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function CartCount(props) {

    const { name, color } = props

    return (
        <View>
            <Icon name={name} color={color} size={23} />
            <View style={styles.circle}>
                <Text style={styles.count}>
                    {1}
                </Text>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    circle: {
        position: 'absolute',
        right: -11,
        top: -3,
        backgroundColor: color.red,
        padding: 1,
        borderRadius: 16 / 2,
        width: 16,
        height: 16,
        alignItems: 'center',
    },
    count: {
        color: color.white,
        fontSize: 10,
    }
})
