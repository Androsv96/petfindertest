/* Sagas */
import { put, call, takeLatest, } from 'redux-saga/effects';

/* api */
import apiCall from '../ApiCall/';

/* Constats */
import { GET_ANIMALS_URL, GET_METHOD, } from '../Utilities/Constants';

/* Functions */
import { clearLocalStorage, getToken, } from '../Utilities/Functions';

/* Actions */
import {
    GET_NEW_TOKEN, GET_PETS_BEGIN, GET_PETS_SUCCESS,
    GET_PETS_WITH_FILTER_BEGIN, GET_PETS_WITH_FILTERS_SUCCESS, SET_NO_INTERNET_CONNECTION,
    SET_SHOW_PETS_PROGRESS_ON,
} from '../Redux/Actions';

export function* getPets() {
    try {

        yield put({ type: SET_SHOW_PETS_PROGRESS_ON, payload: { data: true } });

        let token = getToken();
        if (!token) yield put({ type: GET_NEW_TOKEN, });

        const payload = yield call(apiCall, GET_ANIMALS_URL, GET_METHOD,);

        /* request error */
        if (payload.status) {
            yield clearLocalStorage();
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
            yield put({ type: GET_NEW_TOKEN, });
        }
        else {
            yield put({ type: GET_PETS_SUCCESS, payload });
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: true } });
        }

        yield put({ type: SET_SHOW_PETS_PROGRESS_ON, payload: { data: false } });

    } catch (exception) {
        yield clearLocalStorage();
        yield put({ type: SET_SHOW_PETS_PROGRESS_ON, payload: { data: false } });
        yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
    }
}

export function* getPetsWithFilter(action) {
    try {

        yield put({ type: SET_SHOW_PETS_PROGRESS_ON, payload: { data: true } });

        let token = getToken();
        if (!token) yield put({ type: GET_NEW_TOKEN, });

        const payload = yield call(apiCall, GET_ANIMALS_URL, GET_METHOD, action.payload);

        /* request error */
        if (payload.status) {
            yield clearLocalStorage();
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
            yield put({ type: GET_NEW_TOKEN, });
        }
        else {
            yield put({ type: GET_PETS_WITH_FILTERS_SUCCESS, payload });
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: true } });
        }

        yield put({ type: SET_SHOW_PETS_PROGRESS_ON, payload: { data: false } });

    } catch (exception) {
        yield clearLocalStorage();
        yield put({ type: SET_SHOW_PETS_PROGRESS_ON, payload: { data: false } });
        yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
    }
}

//watchers
export default function* pets() {
    yield takeLatest(GET_PETS_BEGIN, getPets);
    yield takeLatest(GET_PETS_WITH_FILTER_BEGIN, getPetsWithFilter);
}
