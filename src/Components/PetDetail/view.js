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
import Chip from '@material-ui/core/Chip';
import PetsIcon from '@material-ui/icons/Pets';

/* Redux-actions */
import { SET_SHOW_PET_DETAIL, } from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';
import { PROPERTIES_TEXT, ABOUT_TEXT, MEET_TEXT, HOUSE_TRAINED_TEXT, } from '../../Utilities/Constants';

/* react carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function PetDetail({ petsReducer, actionDispatcher }) {

    /* reducers data */
    const { petsShowDetail, petSelected, } = petsReducer;
    console.log(petSelected)
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
                                    <h1 >{petSelected.name}</h1>
                                    <h3 className={styles.petBreeds}>{petSelected.breeds ? petSelected.breeds.primary : ""}</h3>

                                    <hr />
                                    <Box>
                                        <h2 >{PROPERTIES_TEXT}</h2>
                                        {petSelected.age ? <Chip avatar={<PetsIcon className={styles.petPropetiesAvatar} />} label={petSelected.age} className={styles.petProperties} /> : <></>}
                                        {petSelected.gender ? <Chip avatar={<PetsIcon className={styles.petPropetiesAvatar} />} label={petSelected.gender} className={styles.petProperties} /> : <></>}
                                        {petSelected.size ? <Chip avatar={<PetsIcon className={styles.petPropetiesAvatar} />} label={petSelected.size} className={styles.petProperties} /> : <></>}
                                        {petSelected.colors && petSelected.colors.primary ? <Chip avatar={<PetsIcon className={styles.petPropetiesAvatar} />} label={petSelected.colors.primary} className={styles.petProperties} /> : <></>}
                                    </Box>

                                    <hr />
                                    <h2>{ABOUT_TEXT}</h2>
                                    {petSelected.coat ? <Chip avatar={<PetsIcon className={styles.petPropetiesAvatar} />} label={petSelected.coat} className={styles.petProperties} /> : <></>}
                                    {petSelected.attributes && petSelected.attributes.house_trained ? <Chip avatar={<PetsIcon className={styles.petPropetiesAvatar} />} label={HOUSE_TRAINED_TEXT} className={styles.petProperties} /> : <></>}
                                    <hr />


                                    {petSelected.description ? <h2>{`${MEET_TEXT} ${petSelected.name}`}</h2> : <></>}
                                    {petSelected.description ? <h4 className={styles.petBreeds}>{petSelected.description}</h4> : <></>}

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