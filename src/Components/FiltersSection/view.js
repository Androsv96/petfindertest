/* React */
import React, { useEffect } from 'react';

/* Material-ui */
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/CheckBox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


/* Redux-actions */
import {
    GET_ANIMAL_TYPES_BEGIN, SET_SELECTED_ANIMAL_TYPE_FILTER, GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, SET_ANIMALS_TYPES_COLLAPSED,
    SET_ANIMALS_BREEDS_COLLAPSED, SET_SHOW_MORE_BREEDS, GET_PETS_WITH_FILTER_BEGIN, SET_BREEDS_SELECTED, SET_SHOW_FILTERS_SECTION,
} from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';
import { FILTER_TYPE_TEXT, FILTER_BREEDS_TEXT } from '../../Utilities/Constants';

/* Images */
import AppLogo from '../../Imgs/logo.png'

export default function Filters({ filtersReducer, actionDispatcher }) {

    /* reducers data */
    const { animalTypes, selectedAnimalTypeFilter, petsBreeds, showAnimalsTypesCollapsed, breedsSelected,
        showANimalBreedsCollapsed, animalsBreedsShowFrom, animalsBreedsShowUntil, } = filtersReducer;

    /* Hooks */
    useEffect(() => {
        if (animalTypes.length === 0) actionDispatcher(GET_ANIMAL_TYPES_BEGIN);
    });

    return (
        <List component="nav"
            className={styles.mainList}
            subheader=
            {
                <ListSubheader component="div" className={styles.logoContainer}>
                    <ArrowBackIosIcon className={styles.showFiltersSectionIcon} onClick={() => actionDispatcher(SET_SHOW_FILTERS_SECTION, { data: false })} />
                    <img src={AppLogo} alt="Logo" className={styles.logo} />
                </ListSubheader>
            }>

            <ListItem button onClick={() => actionDispatcher(SET_ANIMALS_TYPES_COLLAPSED, { data: !showAnimalsTypesCollapsed })} >
                <ListItemText className={styles.mainListTitle} primary={FILTER_TYPE_TEXT} /> {showAnimalsTypesCollapsed ? < ExpandLess /> : < ExpandMore />} </ListItem>
            {
                animalTypes.map((currObj, index) => {
                    return (
                        <Collapse in={showAnimalsTypesCollapsed} timeout="auto" unmountOnExit key={index} >
                            <List component="div" disablePadding className={styles.subList} >
                                < ListItem button onClick={() => handleAnimalTypeSelected(currObj.name)} >
                                    <ListItemIcon >
                                        <MuiThemeProvider theme={theme} >
                                            <Checkbox edge="end" checked={currObj.name === selectedAnimalTypeFilter} />
                                        </MuiThemeProvider> </ListItemIcon>
                                    <ListItemText primary={currObj.name} />
                                </ListItem>
                            </List>
                        </Collapse>
                    )
                })
            }

            {
                petsBreeds.length > 0 ?
                    <>
                        <ListItem button onClick={() => actionDispatcher(SET_ANIMALS_BREEDS_COLLAPSED, { data: !showANimalBreedsCollapsed })} >
                            <ListItemText className={styles.mainListTitle} primary={FILTER_BREEDS_TEXT} /> {showANimalBreedsCollapsed ? < ExpandLess /> : < ExpandMore />}
                        </ListItem>

                        {
                            petsBreeds.slice(animalsBreedsShowFrom, animalsBreedsShowUntil).map((currObj, index) => {
                                return (
                                    <Collapse in={showANimalBreedsCollapsed} timeout="auto" unmountOnExit key={index} >
                                        <List component="div" className={styles.subList} > {renderAnimalsBreeds(currObj, index,)} </List>
                                    </Collapse>
                                )
                            })
                        }
                    </>

                    :

                    <></>
            }


        </List>

    )

    function handleAnimalTypeSelected(typeSelected) {
        if (selectedAnimalTypeFilter !== typeSelected) {
            actionDispatcher(SET_SELECTED_ANIMAL_TYPE_FILTER, { data: typeSelected });
            actionDispatcher(GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, { data: typeSelected });
            actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: typeSelected });
        }
    }

    function renderAnimalsBreeds(currObj, index,) {
        if (petsBreeds.slice(animalsBreedsShowFrom, animalsBreedsShowUntil).length - 1 === index) {
            return (
                <ListItem >
                    <Box className={styles.directionsArrowsContainer}>
                        <Button variant="contained" className={styles.previousButton} onClick={() => onPreviousButtonClicked()} disabled={animalsBreedsShowFrom === 0}
                            startIcon={<NavigateBeforeIcon />}>
                        </Button>
                        <Button variant="contained" className={styles.nextButton} onClick={() => onNextButtonClicked()} disabled={animalsBreedsShowUntil >= petsBreeds.length}
                            endIcon={<NavigateNextIcon />}>
                        </Button>
                    </Box>
                </ListItem>
            )
        } else {
            return (
                <ListItem button onClick={() => handleBreedsToogle(currObj.name)}>
                    <ListItemIcon>
                        <MuiThemeProvider theme={theme}>
                            <Checkbox
                                edge="end"
                                checked={breedsSelected.indexOf(currObj.name) !== -1}
                            />
                        </MuiThemeProvider>
                    </ListItemIcon>
                    <ListItemText primary={currObj.name} className={styles.subListText} />
                </ListItem>
            )
        }
    }

    function onNextButtonClicked() {
        actionDispatcher(SET_SHOW_MORE_BREEDS, { data: { from: animalsBreedsShowFrom + 10, until: animalsBreedsShowUntil + 10 } })
    }
    function onPreviousButtonClicked() {
        actionDispatcher(SET_SHOW_MORE_BREEDS, { data: { from: animalsBreedsShowFrom + -10, until: animalsBreedsShowUntil - 10 } })
    }

    function handleBreedsToogle(value) {
        const currentIndex = breedsSelected.indexOf(value);
        const newBreedsSelected = [...breedsSelected];

        if (currentIndex === -1) newBreedsSelected.push(value);
        else newBreedsSelected.splice(currentIndex, 1);

        actionDispatcher(SET_BREEDS_SELECTED, { data: newBreedsSelected });
        actionDispatcher(GET_PETS_WITH_FILTER_BEGIN, { type: selectedAnimalTypeFilter, breed: newBreedsSelected });
    }

}

/* Overrides Mui default theme */
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#000"
        },
    }
});