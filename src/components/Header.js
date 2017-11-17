import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headercontainer} >
            <Text style={styles.headertext} >Crypto App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headercontainer: {
        marginTop: 56,
        alignItems: 'center',
        display: 'flex'
    },
    headertext:{
        fontWeight:'bold',
        fontSize:20
    }
});

export default Header;