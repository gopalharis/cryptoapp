import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, ScrollView} from 'react-native'

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

import Spinner from 'react-native-loading-spinner-overlay';
import { logger } from 'react-native-logger';

class CryptoContainer extends Component {
    
    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
    
        logger.log(crypto.data);

        return crypto.data.map((coin, index) => 
        
        
            <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }

    render() {
        const {crypto} = this.props;
        
        if(crypto.isFetching) {
            return(
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading.."}
                        textStyle={{color:'#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }
        return (
            <ScrollView>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}



export default connect(mapStateToProps,{FetchCoinData})(CryptoContainer)