/* React */
import React from 'react';

/* Material-ui */
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

/* Components */
import AppbarContainer from '../Components/Appbar/';
import styles from './css.module.css';
import ProgressOn from '../Components/ProgressOn/view';
import FiltersContainer from '../Components/FiltersSection';
import PetsContainer from '../Components/Pets/';
import FiltersAppliedContainer from '../Components/FiltersApplied';

function App({ progressOnReducer, filtersReducer }) {

  /* store data */
  const { visible } = progressOnReducer;
  const { showFiltersSection } = filtersReducer;

  if (visible) return <ProgressOn />

  return (
    <Box className={styles.mainContainer}>

      <Box className={styles.subContainer}>

        <Paper className={showFiltersSection ? styles.filterContainer : styles.hideFilterContainerr} >
          <FiltersContainer />
        </Paper>

        <Box className={styles.dataContainer}>
          <AppbarContainer />
          <FiltersAppliedContainer />
          <PetsContainer />
        </Box>

      </Box>

    </Box>
  );

}

export default App;
