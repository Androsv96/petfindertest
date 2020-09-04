/* React */
import React from 'react';

/* Material-ui */
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';

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
                                <Chip key={index} className={styles.filtersSelected} label={value} deleteIcon={<ClearIcon className={styles.filtersSelectedIcon} />}
                                    onDelete={() => deleteFilter(value)} />
                            )
                        }
                        <Chip variant="outlined" className={styles.clearAllButton} label={"CLEAR ALL"} deleteIcon={<DeleteIcon className={styles.clearAllIcon} />}
                            onDelete={() => deleteAllFilters()} />
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