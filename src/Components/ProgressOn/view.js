/* React */
import React from 'react';

/* Material-ui */
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

/* Components */
import styles from './css.module.css';

export default function ProgressOn() {
    return (
        <Box className={styles.container}>
            <CircularProgress disableShrink={true} variant="indeterminate" size={60} />
        </Box>
    );
}
