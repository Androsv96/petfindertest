/* React */
import React, { forwardRef } from 'react';

/* Material-ui */
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';

/* react-responsive-carrousel */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Redux-actions */
import { SET_SHOW_PET_DETAIL, } from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';

export default function PetDetail({ petsReducer, actionDispatcher }) {

    /* reducers data */
    const { petsShowDetail, petSelected, } = petsReducer;

    return (
        <Dialog fullScreen open={petsShowDetail} TransitionComponent={Transition} >
            <Box className={styles.mainContainer}>

                <Box className={styles.closeButtonContainer}>
                    <CancelIcon className={styles.closeButton} onClick={() => actionDispatcher(SET_SHOW_PET_DETAIL, { data: false })} />
                </Box>

                {

                    Object.entries(petSelected).length > 0 && petSelected.photos.length > 0 ?
                        <Box className={styles.carrouselContainer}>
                            <Carousel autoPlay infiniteLoop showStatus={false}>
                                {
                                    petSelected.photos.map((value, index) =>
                                        <div key={index} >
                                            <img src={value.full} alt="petImage" />
                                        </div>
                                    )
                                }
                            </Carousel>
                        </Box>
                        :
                        <></>
                }

            </Box>

        </Dialog >
    )
}

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);