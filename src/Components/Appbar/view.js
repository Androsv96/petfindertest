/* React */
import React from 'react';

/* Material-ui */
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

/* Redux-actions */
import { SET_SHOW_FILTERS_SECTION } from '../../Redux/Actions';


/* Components */
import styles from './css.module.css';

export default function MyAppBar({ filtersReducer, actionDispatcher, }) {

    /* reducers data */
    const { showFiltersSection } = filtersReducer;

    return (
        <AppBar position="static" className={styles.appbar}>
            <Toolbar>
                <Box className={styles.menuContainer} onClick={() => actionDispatcher(SET_SHOW_FILTERS_SECTION, { data: !showFiltersSection })}>
                    <MenuIcon className={styles.menuIcon} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}