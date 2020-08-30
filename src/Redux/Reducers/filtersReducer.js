/* Reduxñ-actions */
import { GET_ANIMAL_TYPES_SUCCESS } from '../Actions';

const initialState = {
    animalTypes: [],
}

export default function FiltersReducer(state = initialState, action) {

    switch (action.type) {

        case GET_ANIMAL_TYPES_SUCCESS:
            return {
                animalTypes: action.payload.types
            }


        default:
            return state;
    }
}