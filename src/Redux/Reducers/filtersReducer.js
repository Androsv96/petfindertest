/* Reduxñ-actions */
import { GET_ANIMAL_TYPES_SUCCESS, SET_SELECTED_ANIMAL_TYPE_FILTER, GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS, } from '../Actions';

const initialState = {
    animalTypes: [],
    animalTypeSelectedBreeds: [],
    selectedAnimalTypeFilter: "",

}

export default function FiltersReducer(state = initialState, action) {

    switch (action.type) {

        case GET_ANIMAL_TYPES_SUCCESS:
            return {
                ...state,
                animalTypes: action.payload.types
            }

        case SET_SELECTED_ANIMAL_TYPE_FILTER:
            return {
                ...state,
                selectedAnimalTypeFilter: action.payload.data
            }

        case GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS:
            return {
                ...state,
                animalTypeSelectedBreeds: action.payload.breeds
            }

        default:
            return state;
    }
}