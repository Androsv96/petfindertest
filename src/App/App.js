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

function App({ progressOnReducer }) {

  const { visible } = progressOnReducer;
  if (visible) return <ProgressOn />


  return (
    <Box className={styles.mainContainer}>
      <AppBar />

      <Box className={styles.subContainer}>

        <Box className={styles.filterContainer} onScroll={(e) => test(e)}>
          <FiltersContainer />
        </Box>

        <Box className={styles.dataContainer}>
          <PetsContainer />
        </Box>

      </Box>

    </Box>
  );

  function test(e) {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {

    }
  }
}

export default App;
