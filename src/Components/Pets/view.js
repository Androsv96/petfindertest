/* React */
import React, { useEffect } from 'react';

/* Material-ui */
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

/* Redux-actions */
import { GET_PETS_BEGIN } from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';

/* Images */
import PetImage from '../../Imgs/pet.png'

export default function Pets({ petsReducer, actionDispatcher }) {

    /* Store data */
    const { petsData } = petsReducer;

    /* Hooks */
    useEffect(() => {
        if (petsData.length === 0) actionDispatcher(GET_PETS_BEGIN);
    });


    return (
        <Grid container spacing={3}>

            {
                petsData.map((currObj, index) => {
                    console.log(currObj)
                    return (
                        <Grid item xs={6} sm={4} md={2} lg={2} key={index}>
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
            }


        </Grid>
    )
}