/* Reduxñ-actions */
import {
    GET_ANIMAL_TYPES_SUCCESS, SET_SELECTED_ANIMAL_TYPE_FILTER, GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS,
    SET_ANIMALS_TYPES_COLLAPSED, SET_ANIMALS_BREEDS_COLLAPSED, SET_SHOW_MORE_BREEDS, SET_BREEDS_SELECTED,
    SET_CURRENT_PAGE, SET_SHOW_FILTERS_SECTION,
} from '../Actions';

const initialState = {
    showFiltersSection: true,
    animalTypes: [],
    petsBreeds: [],
    selectedAnimalTypeFilter: "",
    showAnimalsTypesCollapsed: true,
    showANimalBreedsCollapsed: false,
    animalsBreedsShowFrom: 0,
    animalsBreedsShowUntil: 10,
    breedsSelected: [],
    currentPage: 1,
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
                selectedAnimalTypeFilter: action.payload.data,
                currentPage: 1,
                breedsSelected: []
            }

        case GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS:
            return {
                ...state,
                petsBreeds: action.payload.breeds
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

        case SET_BREEDS_SELECTED:
            return {
                ...state,
                breedsSelected: action.payload.data,
                currentPage: 1,
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.data
            }

        case SET_SHOW_FILTERS_SECTION:
            return {
                ...state,
                showFiltersSection: action.payload.data
            }

        default:
            return state;
    }
}