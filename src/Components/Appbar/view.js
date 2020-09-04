/* React */
import React from 'react';

/* Material-ui */
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

/* Redux-actions */
import { SET_SHOW_FILTERS_SECTION } from '../../Redux/Actions';


/* Components */
import styles from './css.module.css';
import { Typography } from '@material-ui/core';

export default function MyAppBar({ filtersReducer, petsReducer, actionDispatcher, }) {

    /* reducers data */
    const { showFiltersSection } = filtersReducer;
    const { petsPagination } = petsReducer;

    let formatedNumber = new Intl.NumberFormat({ style: 'number' });

    return (
        <AppBar position="sticky" className={styles.appbar}>
            <Toolbar>
                <Box className={styles.mainContainer}>
                    <ArrowForwardIosIcon className={styles.menuIcon} onClick={() => actionDispatcher(SET_SHOW_FILTERS_SECTION, { data: !showFiltersSection })} />
                    <Typography className={styles.petsFoundText}> Pets found: {Object.entries(petsPagination).length > 0 ? formatedNumber.format(petsPagination.total_count) : 0}</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}