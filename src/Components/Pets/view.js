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
    console.log(petsData)

    /* Hooks */
    useEffect(() => {
        if (petsData.length === 0) actionDispatcher(GET_PETS_BEGIN);
    });


    return (
        <Grid container spacing={1}>

            {
                petsData.map((currObj, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                            <Paper className={styles.paper}>
                                <Box className={styles.petImageContainer}>
                                    <img src={currObj.photos.length > 0 ? currObj.photos[0].medium : PetImage} className={styles.petImage} alt="petImg" />
                                </Box>
                                <Box className={styles.nameContainer}>{currObj.name}</Box>
                            </Paper>
                        </Grid>
                    )
                })
            }


        </Grid>
    )
}