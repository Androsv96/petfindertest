/* Sagas configs*/
import { all } from 'redux-saga/effects';

/* Sagas */
import filters from './filters';
import apiToken from './apiToken';
import pets from './pets';

export default function* rootSaga() {
    yield all([filters(), apiToken(), pets()])
}
