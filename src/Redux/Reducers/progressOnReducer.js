import { SET_PROGRESS_OFF, SET_PROGRESS_ON } from '../Actions';

const initialState = {
    visible: false
}

export default function ProgressOnReducer(state = initialState, action) {

    switch (action.type) {
        case SET_PROGRESS_OFF:
            return {
                ...state,
                visible: false
            }

        case SET_PROGRESS_ON:
            return {
                ...state,
                visible: true
            }

        default:
            return state;
    }
}
