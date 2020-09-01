/* Sagas */
import { put, call, takeLeading, } from 'redux-saga/effects';

/* api */
import apiCall from '../ApiCall/';

/* Constats */
import { POST_METHOD, GET_TOKEN_URL } from '../Utilities/Constants';

/* Functions */
import { saveToken } from '../Utilities/Functions';

/* Actions */
import { NEW_ERROR, } from '../Redux/Actions';

export function* getNewError(action) {
    try {

        /* If token expires */
        if (action.payload.message === "Failed to fetch" || action.payload.hint === "Access token is invalid") {

            const payload = yield call(apiCall, GET_TOKEN_URL, POST_METHOD,); //get new token
            yield saveToken(payload.access_token);

            /* Dispatch previous request again */
            if (action.payload.action) yield put({ type: action.payload.actionDispatched, action: action.payload.action });
            else yield put({ type: action.payload.actionDispatched });

        }
        else {
            alert("hubo un error :c");
            console.log(action.payload);
        }

    } catch (exception) {
        console.log(exception);
    }
}

//watchers
export default function* errors() {
    yield takeLeading(NEW_ERROR, getNewError);
}