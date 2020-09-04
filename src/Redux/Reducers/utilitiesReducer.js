import { SET_NO_INTERNET_CONNECTION, } from '../Actions';

const initialState = {
    hasInternetConnection: true,
}

export default function UtilitiesReducer(state = initialState, action) {

    switch (action.type) {

        case SET_NO_INTERNET_CONNECTION:
            return {
                ...state,
                hasInternetConnection: action.payload.data
            }

        default:
            return state;
    }
}
