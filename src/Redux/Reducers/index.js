/* Redux */
import { combineReducers } from 'redux';

/* Reducers */
import petsReducer from './petsReducer';
import filtersReducer from './filtersReducer';
import utilitiesReducer from './utilitiesReducer';

export default combineReducers({
    petsReducer,
    filtersReducer,
    utilitiesReducer,
});
