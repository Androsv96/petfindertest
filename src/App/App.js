/* React */
import React from 'react';

/* Material-ui */
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

/* Components */
import AppbarContainer from '../Components/Appbar/';
import styles from './css.module.css';
import FiltersContainer from '../Components/FiltersSection';
import PetsContainer from '../Components/Pets/';
import FiltersAppliedContainer from '../Components/FiltersApplied';
import NoInternetConnectionContainer from '../Components/NoInternetConnection/';
import ProgressOn from '../Components/ProgressOn/view';

function App({ utilitiesReducer, filtersReducer, petsReducer, }) {

  /* store data */
  const { hasInternetConnection } = utilitiesReducer;
  const { showFiltersSection, showFiltersProgressOn } = filtersReducer;
  const { showPetsProgressOn, } = petsReducer;

  if (!hasInternetConnection) return <NoInternetConnectionContainer />


  else
    return (
      <Box className={styles.mainContainer}>

        <Box className={styles.subContainer}>

          <Paper className={showFiltersSection ? styles.filterContainer : styles.hideFilterContainerr} >
            {
              showFiltersProgressOn ?
                <ProgressOn />
                :
                <FiltersContainer />
            }
          </Paper>

          <Box className={styles.dataContainer}>
            {
              showPetsProgressOn ?
                <ProgressOn />
                :
                <>
                  <AppbarContainer />
                  <FiltersAppliedContainer />
                  <PetsContainer />
                </>
            }
          </Box>

        </Box>

      </Box>
    );
}

export default App;
