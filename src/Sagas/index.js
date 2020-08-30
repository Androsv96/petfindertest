/* Sagas configs*/
import { all } from 'redux-saga/effects';

/* Sagas */
import filters from './filters';
import errors from './errors';

export default function* rootSaga() {
    yield all([filters(), errors(),])
}
