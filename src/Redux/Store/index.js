/* Redux */
import { createStore, applyMiddleware } from 'redux';

/* Reducers */
import CombineReducers from '../Reducers/';

/* Sagas */
import reduxSaga from 'redux-saga';

const sagaMiddleware = reduxSaga();

export default function configureStore() {
    return {
        ...createStore(CombineReducers, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}
