/* Sagas configs*/
import { all } from 'redux-saga/effects';

/* Sagas */
import filters from './filters';
import errors from './errors';
import pets from './pets';

export default function* rootSaga() {
    yield all([filters(), errors(), pets()])
}
