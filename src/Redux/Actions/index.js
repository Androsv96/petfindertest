export const GET_NEW_TOKEN_BEGIN = "GET_NEW_TOKEN_BEGIN";
export const GET_NEW_TOKEN_SUCCESS = "GET_NEW_TOKEN_SUCCESS";
export const GET_ANIMAL_TYPES_BEGIN = "GET_ANIMAL_TYPES_BEGIN";
export const GET_ANIMAL_TYPES_SUCCESS = "GET_ANIMAL_TYPES_SUCCESS";
export const SET_PROGRESS_ON = "SET_PROGRESS_ON";
export const SET_PROGRESS_OFF = "SET_PROGRESS_OFF";
export const NEW_ERROR = "NEW_ERROR";

export const actionDispatcher = (action, payload) => ({
    type: action,
    payload
});
