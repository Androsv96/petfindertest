/* React */
import React, { forwardRef } from 'react';

/* Material-ui */
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';

/* Redux-actions */
import { SET_SHOW_PET_DETAIL, } from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';

/* react carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function PetDetail({ petsReducer, actionDispatcher }) {

    /* reducers data */
    const { petsShowDetail, petSelected, } = petsReducer;
    
    return (
        <Dialog fullScreen open={petsShowDetail} TransitionComponent={Transition} >
            <Box className={styles.mainContainer}>

                <Box className={styles.closeButtonContainer}>
                    <CancelIcon className={styles.closeButton} onClick={() => actionDispatcher(SET_SHOW_PET_DETAIL, { data: false })} />
                </Box>

                <Box className={styles.subContainer}>

                    <Grid container spacing={2} className={styles.mainGrid}>

                        {

                            Object.entries(petSelected).length > 0 && petSelected.photos.length > 0 ?
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} className={styles.carousel}>

                                        {
                                            petSelected.photos.map((value, index) =>
                                                <img key={index} src={value.full} alt="petImage" className={styles.carouselImages} />
                                            )
                                        }
                                    </Carousel>
                                </Grid>
                                :
                                <></>
                        }

                        <Grid item xs={12} sm={12} md={12} lg={12}>

                            <Paper className={styles.paper}>

                                <Box className={styles.petsDataContainer}>
                                    <Typography className={styles.petName}>{petSelected.name}</Typography>
                                    <Typography className={styles.petBreeds}>{petSelected.breeds ? petSelected.breeds.primary : ""}</Typography>

                                    <hr />
                                    <Box>
                                        <Typography className={styles.petTitle}>Properties</Typography>
                                        {petSelected.age ? <Typography className={styles.petProperties}>{petSelected.age}</Typography> : <></>}
                                        {petSelected.gender ? <Typography className={styles.petProperties}>{petSelected.gender}</Typography> : <></>}
                                        {petSelected.size ? <Typography className={styles.petProperties}>{petSelected.size}</Typography> : <></>}
                                        {petSelected.colors && petSelected.colors.primary ? <Typography className={styles.petProperties}>{petSelected.colors.primary}</Typography> : <></>}

                                    </Box>

                                    <hr />
                                    <Typography className={styles.petTitle}>About</Typography>

                                    {petSelected.coat ? <Typography className={styles.petExtraDataTitle}>Coat length</Typography> : <></>}
                                    {petSelected.coat ? <Typography className={styles.petExtraDataText}>{petSelected.coat}</Typography> : <></>}

                                    {petSelected.age ? <Typography className={styles.petExtraDataTitle}>Age</Typography> : <></>}
                                    {petSelected.age ? <Typography className={styles.petExtraDataText}>{petSelected.age}</Typography> : <></>}
                                    <hr />

                                    <Box className={styles.petsDataContainer}>
                                        <Typography className={styles.petTitle}>{`Meet ${petSelected.name}`}</Typography>
                                        <Typography className={styles.petDescriptionText}>{petSelected.description}</Typography>
                                    </Box>

                                </Box>

                            </Paper>
                        </Grid>

                    </Grid>

                </Box>


            </Box>

        </Dialog >
    )
}

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);