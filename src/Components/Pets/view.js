/* React */
import React, { useEffect } from 'react';

/* Material-ui */
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

/* Redux-actions */
import { GET_PETS_BEGIN, GET_PETS_WITH_FILTER_BEGIN, SET_CURRENT_PAGE, } from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';

/* Images */
import PetImage from '../../Imgs/pet.png'

export default function Pets({ petsReducer, filtersReducer, actionDispatcher }) {

    /* Store data */
    const { petsData, petsPagination, } = petsReducer;
    const { currentPage, selectedAnimalTypeFilter, breedsSelected, } = filtersReducer;
    console.log(petsPagination)

    /* Hooks */
    useEffect(() => {
        if (petsData.length === 0) actionDispatcher(GET_PETS_BEGIN);
    });


    return (
        <Box>
            <Grid container spacing={3} >

                {
                    petsData.length > 0 ?
                        petsData.map((currObj, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                    <Paper className={styles.paper}>
                                        <Box className={styles.petImageContainer}>
                                            <img src={currObj.photos.length > 0 ? currObj.photos[0].large : PetImage} className={styles.petImage} alt="petImg" />
                                        </Box>
                                        <Box className={styles.nameContainer}>{currObj.name}</Box>
                                        <Box className={styles.breedContainer}>{currObj.breeds.primary}</Box>
                                    </Paper>
                                </Grid>
                            )
                        })
                        :
                        <Box>No data</Box>
                }

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box className={styles.directionButtonContainer}>
                        <Button variant="contained" className={styles.previousPageButton} startIcon={<NavigateBeforeIcon />} onClick={() => onPreviousPageClicked()}
                            disabled={currentPage === 1}>
                            Previous
                        </Button>

                        <Button variant="contained" className={styles.nextPageButton} endIcon={<NavigateNextIcon />} onClick={() => onNextPageClicked()}
                            disabled={currentPage === petsPagination.total_pages}>
                            Next
                        </Button>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )

    function onNextPageClicked() {
        actionDispatcher(SET_CURRENT_PAGE, { data: currentPage + 1 });
        actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: selectedAnimalTypeFilter, breed: breedsSelected, page: currentPage + 1 });
    }

    function onPreviousPageClicked() {
        actionDispatcher(SET_CURRENT_PAGE, { data: currentPage - 1 });
        actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: selectedAnimalTypeFilter, breed: breedsSelected, page: currentPage - 1 });
    }
}