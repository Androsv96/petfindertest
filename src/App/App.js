/* React */
import React from 'react';

/* Material-ui */
import Box from '@material-ui/core/Box';

/* Components */
import AppBar from '../Components/Appbar/view';
import styles from './css.module.css';
import ProgressOn from '../Components/ProgressOn/view';
import FiltersContainer from '../Components/FiltersSection';
import PetsContainer from '../Components/Pets/';
import FiltersAppliedContainer from '../Components/FiltersApplied';
import PetDetailContainer from '../Components/PetDetail';

function App({ progressOnReducer }) {

  const { visible } = progressOnReducer;
  if (visible) return <ProgressOn />


  return (
    <Box className={styles.mainContainer}>
      <AppBar />

      <Box className={styles.subContainer}>

        <Box className={styles.filterContainer}>
          <FiltersContainer />
        </Box>

        <Box className={styles.dataContainer}>
          <FiltersAppliedContainer />
          <PetsContainer />
        </Box>

      </Box>

    </Box>
  );

}

export default App;
