/* React */
import React from 'react';

/* Material-ui */
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';

/* Components */
import styles from './css.module.css';
import { FILTERS_APPLIED_TEXT } from '../../Utilities/Constants';

/* Redux-actions */
import { SET_BREEDS_SELECTED, GET_PETS_WITH_FILTER_BEGIN, } from '../../Redux/Actions';

export default function Pets({ filtersReducer, actionDispatcher }) {

    /* reducers data */
    const { selectedAnimalTypeFilter, breedsSelected, } = filtersReducer;

    return (
        <Box className={styles.mainContainer}>
            {
                breedsSelected.length > 0 ?
                    <>
                        <Typography className={styles.filtersTitle}>{FILTERS_APPLIED_TEXT}</Typography>
                        {
                            breedsSelected.map((value, index) =>
                                <Button variant="contained" key={index} endIcon={<ClearIcon className={styles.filtersSelectedIcon} />}
                                    onClick={() => deleteFilter(value)} className={styles.filtersSelected}>
                                    {value}
                                </Button>
                            )
                        }
                        <Button variant="text" endIcon={<DeleteIcon className={styles.clearAllIcon} />} className={styles.clearAllButton}
                            onClick={() => deleteAllFilters()} >
                            Clear all
                        </Button>
                    </>
                    :
                    <></>
            }
        </Box>
    )

    function deleteFilter(value) {
        const currentIndex = breedsSelected.indexOf(value);
        const newBreedsSelected = [...breedsSelected];

        if (currentIndex === -1) newBreedsSelected.push(value);
        else newBreedsSelected.splice(currentIndex, 1);

        actionDispatcher(SET_BREEDS_SELECTED, { data: newBreedsSelected });
        actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: selectedAnimalTypeFilter, breed: newBreedsSelected });
    }

    function deleteAllFilters() {
        actionDispatcher(SET_BREEDS_SELECTED, { data: [] });
        actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: selectedAnimalTypeFilter, breed: [] });
    }

}