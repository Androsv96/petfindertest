export const GET_NEW_TOKEN_BEGIN = "GET_NEW_TOKEN_BEGIN";
export const GET_NEW_TOKEN_SUCCESS = "GET_NEW_TOKEN_SUCCESS";
export const GET_ANIMAL_TYPES_BEGIN = "GET_ANIMAL_TYPES_BEGIN";
export const GET_ANIMAL_TYPES_SUCCESS = "GET_ANIMAL_TYPES_SUCCESS";
export const GET_PETS_BEGIN = "GET_PETS_BEGIN";
export const GET_PETS_SUCCESS = "GET_PETS_SUCCESS";
export const GET_PETS_WITH_FILTER_BEGIN = "GET_PETS_WITH_FILTER_BEGIN";
export const GET_PETS_WITH_FILTERS_SUCCESS = "GET_PETS_WITH_FILTERS_SUCCESS";
export const GET_BREEDS_BY_ANIMAL_TYPE_BEGIN = "GET_BREEDS_BY_ANIMAL_TYPE_BEGIN";
export const GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS = "GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS";
export const GET_NEW_TOKEN = "GET_NEW_TOKEN";

export const SET_SELECTED_ANIMAL_TYPE_FILTER = "SET_SELECTED_ANIMAL_TYPE_FILTER";
export const SET_SHOW_PETS_PROGRESS_ON = "SET_SHOW_PETS_PROGRESS_ON";
export const SET_SHOW_FILTERS_PROGRESS_ON = "SET_SHOW_FILTERS_PROGRESS_ON";
export const SET_ANIMALS_TYPES_COLLAPSED = "SET_ANIMALS_TYPES_COLLAPSED";
export const SET_ANIMALS_BREEDS_COLLAPSED = "SET_ANIMALS_BREEDS_COLLAPSED";
export const SET_SHOW_MORE_BREEDS = "SET_SHOW_MORE_BREEDS";
export const SET_BREEDS_SELECTED = "SET_BREEDS_SELECTED";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_SHOW_PET_DETAIL = "SET_SHOW_PET_DETAIL";
export const SET_SELECTED_PET = "SET_SELECTED_PET";
export const SET_SHOW_FILTERS_SECTION = "SET_SHOW_FILTERS_SECTION";
export const SET_NO_INTERNET_CONNECTION = "SET_NO_INTERNET_CONNECTION";

export const actionDispatcher = (action, payload) => ({
    type: action,
    payload
});
