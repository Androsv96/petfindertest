/* Sagas */
import { put, call, takeLatest, } from 'redux-saga/effects';

/* api */
import apiCall from '../ApiCall/';

/* Constats */
import { GET_METHOD, GET_ANIMALS_TYPES_URL, GET_ANIMAL_BREED_URL, } from '../Utilities/Constants';

/* functions */
import { getToken, clearLocalStorage } from '../Utilities/Functions';

/* Actions */
import {
    GET_ANIMAL_TYPES_BEGIN, GET_ANIMAL_TYPES_SUCCESS, GET_NEW_TOKEN, GET_BREEDS_BY_ANIMAL_TYPE_BEGIN,
    GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS, SET_NO_INTERNET_CONNECTION, SET_SHOW_FILTERS_PROGRESS_ON,
} from '../Redux/Actions';

export function* getFilters() {
    try {

        yield put({ type: SET_SHOW_FILTERS_PROGRESS_ON, payload: { data: true } });

        let token = getToken();
        if (!token) yield put({ type: GET_NEW_TOKEN, });

        const payload = yield call(apiCall, GET_ANIMALS_TYPES_URL, GET_METHOD,);
        if (payload.status) {
            yield clearLocalStorage();
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
            yield put({ type: GET_NEW_TOKEN, });
        }
        else {
            yield put({ type: GET_ANIMAL_TYPES_SUCCESS, payload });
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: true } });
        }

        yield put({ type: SET_SHOW_FILTERS_PROGRESS_ON, payload: { data: false } });

    } catch (exception) {
        yield clearLocalStorage();
        yield put({ type: SET_SHOW_FILTERS_PROGRESS_ON, payload: { data: false } });
        yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
    }
}

export function* getBreedsByAnimalTypeSelected(action) {
    try {

        yield put({ type: SET_SHOW_FILTERS_PROGRESS_ON, payload: { data: true } });

        let token = getToken();
        if (!token) yield put({ type: GET_NEW_TOKEN, });

        let GET_NEW_ANIMAL_BREED_URL = GET_ANIMAL_BREED_URL.replace("{type}", action.payload.data);

        const payload = yield call(apiCall, GET_NEW_ANIMAL_BREED_URL, GET_METHOD,);

        if (payload.status) {
            yield clearLocalStorage();
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
            yield put({ type: GET_NEW_TOKEN, });
        }
        else {
            yield put({ type: GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS, payload });
            yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: true } });
        }

        yield put({ type: SET_SHOW_FILTERS_PROGRESS_ON, payload: { data: false } });

    } catch (exception) {
        yield clearLocalStorage();
        yield put({ type: SET_SHOW_FILTERS_PROGRESS_ON, payload: { data: false } });
        yield put({ type: SET_NO_INTERNET_CONNECTION, payload: { data: false } });
    }
}

//watchers
export default function* filters() {
    yield takeLatest(GET_ANIMAL_TYPES_BEGIN, getFilters);
    yield takeLatest(GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, getBreedsByAnimalTypeSelected);
}
