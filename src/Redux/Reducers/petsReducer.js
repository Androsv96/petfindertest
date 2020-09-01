/* Redux-actions */
import { GET_PETS_SUCCESS, GET_PETS_WITH_FILTERS_SUCCESS, } from '../Actions';

const initialState = {
    petsData: [],
    petsPagination: {},
}

export default function PetsReducer(state = initialState, action) {

    switch (action.type) {

        case GET_PETS_SUCCESS:
        case GET_PETS_WITH_FILTERS_SUCCESS:
            return {
                ...state,
                petsData: action.payload.animals,
                petsPagination: action.payload.pagination,
            }


        default:
            return state;
    }
}