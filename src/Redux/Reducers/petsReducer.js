/* Redux-actions */
import { GET_PETS_SUCCESS, GET_PETS_WITH_FILTERS_SUCCESS, } from '../Actions';

const initialState = {
    petsData: [],
}

export default function PetsReducer(state = initialState, action) {

    switch (action.type) {

        case GET_PETS_SUCCESS:
        case GET_PETS_WITH_FILTERS_SUCCESS:
            return {
                ...state,
                petsData: action.payload.animals
            }


        default:
            return state;
    }
}