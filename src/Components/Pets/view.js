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
import { GET_PETS_BEGIN, GET_PETS_WITH_FILTER_BEGIN, SET_CURRENT_PAGE, SET_SHOW_PET_DETAIL, SET_SELECTED_PET, } from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';
import PetDetail from '../PetDetail';
import ProgressOn from '../ProgressOn/view';

/* Images */
import PetImage from '../../Imgs/pet.png';

/* Functions */
import { decodeHtml } from '../../Utilities/Functions';

export default function Pets({ petsReducer, filtersReducer, utilitiesReducer, actionDispatcher }) {

    /* reducers data */
    const { petsData, petsPagination, showPetsProgressOn, } = petsReducer;
    const { currentPage, selectedAnimalTypeFilter, breedsSelected, } = filtersReducer;
    const { hasInternetConnection } = utilitiesReducer;

    /* Hooks */
    useEffect(() => {
        if (petsData.length === 0 && hasInternetConnection) actionDispatcher(GET_PETS_BEGIN);
    });

    if (showPetsProgressOn) return <ProgressOn />
    else
        return (
            <Box className={styles.mainContainer}>
                <Grid container spacing={3} >

                    {
                        petsData.length > 0 ?
                            petsData.map((currObj, index) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={3} key={index} className={styles.petDataGrid}>
                                        <Paper className={styles.paper} onClick={() => handlePetSelected(currObj)} >
                                            <Box className={styles.petImageContainer}>
                                                <img src={currObj.photos.length > 0 ? currObj.photos[0].large : PetImage} className={styles.petImage} alt="petImg" />
                                            </Box>
                                            <Box className={styles.nameContainer}>{decodeHtml(currObj.name)}</Box>
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
                            <Button variant="contained" className={currentPage === 1 ? styles.disabledButton : styles.previousPageButton} startIcon={<NavigateBeforeIcon />}
                                onClick={() => onPreviousPageClicked()}
                                disabled={currentPage === 1}>
                                Previous
                        </Button>

                            <Button variant="contained" className={currentPage === petsPagination.total_pages ? styles.disabledButton : styles.nextPageButton} endIcon={<NavigateNextIcon />}
                                onClick={() => onNextPageClicked()}
                                disabled={currentPage === petsPagination.total_pages}>
                                Next
                        </Button>
                        </Box>
                    </Grid>

                </Grid>

                <PetDetail />

            </Box >
        )

    function onNextPageClicked() {
        actionDispatcher(SET_CURRENT_PAGE, { data: currentPage + 1 });
        actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: selectedAnimalTypeFilter, breed: breedsSelected, page: currentPage + 1 });
    }

    function onPreviousPageClicked() {
        actionDispatcher(SET_CURRENT_PAGE, { data: currentPage - 1 });
        actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: selectedAnimalTypeFilter, breed: breedsSelected, page: currentPage - 1 });
    }

    function handlePetSelected(petData) {
        actionDispatcher(SET_SHOW_PET_DETAIL, { data: true })
        actionDispatcher(SET_SELECTED_PET, { data: petData })
    }


}