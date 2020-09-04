/* React */
import React from 'react';

/* Components */
import styles from './css.module.css';
import { NO_CONNECTION_TEXT, TRY_AGAIN_TEXT } from '../../Utilities/Constants';

/* Material-Ui */
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Replay from '@material-ui/icons/Replay';

/* Redux-actions */
import { GET_PETS_BEGIN } from '../../Redux/Actions';

export default function NoInternetConecction({ actionDispatcher }) {

    return (
        <Box className={styles.mainContainer}>
            <Box className={styles.subContainer}>
                {NO_CONNECTION_TEXT}
                <Button onClick={() => actionDispatcher(GET_PETS_BEGIN)} endIcon={<Replay />}>{TRY_AGAIN_TEXT}</Button>
            </Box>
        </Box>
    );

}
