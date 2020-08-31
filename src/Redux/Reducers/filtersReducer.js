/* Reduxñ-actions */
import {
    GET_ANIMAL_TYPES_SUCCESS, SET_SELECTED_ANIMAL_TYPE_FILTER, GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS,
    SET_ANIMALS_TYPES_COLLAPSED, SET_ANIMALS_BREEDS_COLLAPSED, SET_SHOW_MORE_BREEDS,
} from '../Actions';

const initialState = {
    animalTypes: [],
    animalTypeSelectedBreeds: [],
    selectedAnimalTypeFilter: "",
    showAnimalsTypesCollapsed: true,
    showANimalBreedsCollapsed: false,
    animalsBreedsShowFrom: 0,
    animalsBreedsShowUntil: 10,

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

        case SET_ANIMALS_TYPES_COLLAPSED:
            return {
                ...state,
                showAnimalsTypesCollapsed: action.payload.data
            }

        case SET_ANIMALS_BREEDS_COLLAPSED:
            return {
                ...state,
                showANimalBreedsCollapsed: action.payload.data
            }

        case SET_SHOW_MORE_BREEDS:
            return {
                ...state,
                animalsBreedsShowFrom: action.payload.data.from,
                animalsBreedsShowUntil: action.payload.data.until,
            }

        default:
            return state;
    }
}