/* Redux */
import { combineReducers } from 'redux';

/* Reducers */
import petsReducer from './petsReducer';
import filtersReducer from './filtersReducer';
import progressOnReducer from './progressOnReducer';

export default combineReducers({
    petsReducer,
    filtersReducer,
    progressOnReducer
});
