import axios from 'axios';
import { apiBaseURL } from '../Utils/Constants';
import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_FAILED, FETCHING_COIN_DATA_SUCCESS} from '../Utils/ActionTypes';

export default function fetchCoinData() {
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA});

        axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
        .then(res => {
            dispatch({type:FETCHING_COIN_DATA_SUCCESS, payload: res.data });
        })
        .catch(error=>{
            dispatch({type:FETCHING_COIN_DATA_FAILED, payload: error.data});
        })
    }
}
