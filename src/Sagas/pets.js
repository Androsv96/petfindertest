/* Sagas */
import { put, call, takeLeading, } from 'redux-saga/effects';

/* api */
import apiCall from '../ApiCall/';

/* Constats */
import { GET_ANIMALS_URL, GET_METHOD, } from '../Utilities/Constants';

/* Actions */
import {
    SET_PROGRESS_ON, SET_PROGRESS_OFF, NEW_ERROR, GET_PETS_BEGIN, GET_PETS_SUCCESS,
    GET_PETS_WITH_FILTER_BEGIN, GET_PETS_WITH_FILTERS_SUCCESS,
} from '../Redux/Actions';

export function* getPets() {
    try {

        yield put({ type: SET_PROGRESS_ON });

        const payload = yield call(apiCall, GET_ANIMALS_URL, GET_METHOD,);

        if (payload.error) yield console.log(payload);
        else yield put({ type: GET_PETS_SUCCESS, payload });

        yield put({ type: SET_PROGRESS_OFF });

    } catch (exception) {
        yield put({ type: NEW_ERROR, payload: { message: exception.message, actionDispatched: GET_PETS_BEGIN } });
    }
}

export function* getPetsWithFilter(action) {
    try {

        yield put({ type: SET_PROGRESS_ON });

        const payload = yield call(apiCall, GET_ANIMALS_URL, GET_METHOD, action.payload);

        if (payload.error) yield console.log(payload);
        else yield put({ type: GET_PETS_WITH_FILTERS_SUCCESS, payload });

        yield put({ type: SET_PROGRESS_OFF });

    } catch (exception) {
        yield put({ type: NEW_ERROR, payload: { message: exception.message, actionDispatched: GET_PETS_WITH_FILTER_BEGIN } });
    }
}

//watchers
export default function* pets() {
    yield takeLeading(GET_PETS_BEGIN, getPets);
    yield takeLeading(GET_PETS_WITH_FILTER_BEGIN, getPetsWithFilter);
}
