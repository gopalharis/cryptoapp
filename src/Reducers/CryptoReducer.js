import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_FAILED, FETCHING_COIN_DATA_SUCCESS} from '../Utils/ActionTypes';

const initialState = {
    isFetching: false,
    data: [],
    hasError:false,
    errorMessage:null
}
export default function(state=initialState, action) {
    
    switch(action.type) {
        case FETCHING_COIN_DATA: 
            return Object.assign({}, state, {
                isFetching: true,
                data: [],
                hasError:false,
                errorMessage:null
            });
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError:false,
                errorMessage:null
            });
        case FETCHING_COIN_DATA_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                data: [],
                hasError:true,
                errorMessage:action.payload
            });

        default:
            return state;
    }

}