/* Redux-actions */
import { GET_PETS_SUCCESS } from '../Actions';

const initialState = {
    petsData: [],
}

export default function PetsReducer(state = initialState, action) {
    
    switch (action.type) {

        case GET_PETS_SUCCESS:
            return {
                ...state,
                petsData: action.payload.animals
            }


        default:
            return state;
    }
}