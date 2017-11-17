import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { images } from '../Utils/CoinIcons';

const CoinCard = ({symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {
    return (
        <View style={styles.container} >
            <View style={styles.upperRow} >
                <Image
                style={styles.image}
                source={{ uri: images[symbol] }} />
                <Text style={styles.coinSymbol} >{symbol}</Text>
                <Text style={styles.separator} >|</Text>
                <Text style={styles.coinName} >{coin_name}</Text>
                <Text style={styles.price} >{price_usd}
                    <Text style={styles.moneySymbol} > $ </Text>
                </Text>  

            </View>
            <View style={styles.stats} >
                <Text>24h: 
                    <Text style={ percent_change_24h > 0 ?  styles.percentChangePlus : styles.percentChangeMinus} >{percent_change_24h} % </Text>
                </Text>

                <Text>7d: 
                    <Text style={ percent_change_7d > 0 ?  styles.percentChangePlus : styles.percentChangeMinus} >{percent_change_7d} % </Text>
                </Text>
                
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#e5e5e5'
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    image:{
        height: 40,
        width: 40
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5, 
        fontWeight: "bold"
    },
    separator: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5
    },
    price: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontWeight: 'bold'
    },
    moneySymbol: {
        marginLeft: 5
    },
    stats: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: '#FAFAFA',
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color:"#00BFA5",
        fontWeight:"bold",
        marginLeft:5
    },
    percentChangeMinus: {
        color:"#DD2C00",
        fontWeight:"bold",
        marginLeft:5
    },
    bold: {
        fontWeight:'bold'
    }
})

const {container, image, bold} = styles

export default CoinCard;