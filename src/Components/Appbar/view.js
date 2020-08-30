/* React */
import React from 'react';

/* Material-ui */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


/* Components */
import AppLogo from '../../Imgs/logo.png'
import styles from './css.module.css';

export default function MyAppBar() {
    return (
        <AppBar position="static" className={styles.appbar}>
            <Toolbar>
                <img src={AppLogo} alt="Logo" className={styles.logo}></img>
            </Toolbar>
        </AppBar>
    )
}