/* Redux-actions */
import { GET_PETS_SUCCESS, GET_PETS_WITH_FILTERS_SUCCESS, SET_SHOW_PET_DETAIL, SET_SELECTED_PET, } from '../Actions';

const initialState = {
    petsData: [],
    petsPagination: {},
    petsShowDetail: false,
    petSelected: {},
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

        case SET_SHOW_PET_DETAIL:
            return {
                ...state,
                petsShowDetail: action.payload.data
            }

        case SET_SELECTED_PET:
            return {
                ...state,
                petSelected: action.payload.data
            }


        default:
            return state;
    }
}