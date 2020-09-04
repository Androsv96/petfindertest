/* Sagas */
import { put, call, takeLeading, } from 'redux-saga/effects';

/* api */
import apiCall from '../ApiCall';

/* Constats */
import { POST_METHOD, GET_TOKEN_URL } from '../Utilities/Constants';

/* Functions */
import { saveToken, clearLocalStorage, } from '../Utilities/Functions';

/* Actions */
import { GET_NEW_TOKEN, SET_NO_INTERNET_CONNECTION, } from '../Redux/Actions';

export function* getNewToken() {
    try {

        const payload = yield call(apiCall, GET_TOKEN_URL, POST_METHOD,); //get new token
        yield saveToken(payload.access_token);


    } catch (exception) {
        yield clearLocalStorage();
        yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
    }
}

//watchers
export default function* apiToken() {
    yield takeLeading(GET_NEW_TOKEN, getNewToken);
}
