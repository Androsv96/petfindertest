/* Sagas */
import { put, call, takeLatest, } from 'redux-saga/effects';

/* api */
import apiCall from '../ApiCall/';

/* Constats */
import { GET_METHOD, GET_ANIMALS_TYPES_URL, GET_ANIMAL_BREED_URL, } from '../Utilities/Constants';

/* Actions */
import {
    GET_ANIMAL_TYPES_BEGIN, GET_ANIMAL_TYPES_SUCCESS, SET_PROGRESS_ON, SET_PROGRESS_OFF, NEW_ERROR, GET_BREEDS_BY_ANIMAL_TYPE_BEGIN,
    GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS,
} from '../Redux/Actions';

export function* getFilters() {
    try {

        yield put({ type: SET_PROGRESS_ON });

        const payload = yield call(apiCall, GET_ANIMALS_TYPES_URL, GET_METHOD,);
        if (payload.status) yield put({ type: NEW_ERROR, payload: { ...payload, actionDispatched: GET_ANIMAL_TYPES_BEGIN } });
        else yield put({ type: GET_ANIMAL_TYPES_SUCCESS, payload });

        yield put({ type: SET_PROGRESS_OFF });

    } catch (exception) {
        yield put({ type: NEW_ERROR, payload: { message: exception.message, actionDispatched: GET_ANIMAL_TYPES_BEGIN } });
    }
}

export function* getBreedsByAnimalTypeSelected(action) {
    try {

        let GET_NEW_ANIMAL_BREED_URL = GET_ANIMAL_BREED_URL.replace("{type}", action.payload.data);

        yield put({ type: SET_PROGRESS_ON });

        const payload = yield call(apiCall, GET_NEW_ANIMAL_BREED_URL, GET_METHOD,);

        if (payload.status) yield put({ type: NEW_ERROR, payload: { ...payload, actionDispatched: GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, action } });
        else yield put({ type: GET_BREEDS_BY_ANIMAL_TYPE_SUCCESS, payload });

        yield put({ type: SET_PROGRESS_OFF });

    } catch (exception) {
        yield put({ type: NEW_ERROR, payload: { message: exception.message, actionDispatched: GET_BREEDS_BY_ANIMAL_TYPE_BEGIN } });
    }
}

//watchers
export default function* filters() {
    yield takeLatest(GET_ANIMAL_TYPES_BEGIN, getFilters);
    yield takeLatest(GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, getBreedsByAnimalTypeSelected);
}
