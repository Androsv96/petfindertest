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


/* Redux-actions */
import {
    GET_ANIMAL_TYPES_BEGIN, SET_SELECTED_ANIMAL_TYPE_FILTER, GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, SET_ANIMALS_TYPES_COLLAPSED,
    SET_ANIMALS_BREEDS_COLLAPSED, SET_SHOW_MORE_BREEDS, GET_PETS_BY_TYPE_BEGIN,
} from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';

export default function Filters({ filtersReducer, actionDispatcher }) {

    /* Store data */
    const { animalTypes, selectedAnimalTypeFilter, animalTypeSelectedBreeds, showAnimalsTypesCollapsed,
        showANimalBreedsCollapsed, animalsBreedsShowFrom, animalsBreedsShowUntil, } = filtersReducer;

    /* Hooks */
    useEffect(() => {
        if (animalTypes.length === 0) actionDispatcher(GET_ANIMAL_TYPES_BEGIN);
    });

    return (
        <List component="nav"
            className={styles.mainList}
            subheader={
                <ListSubheader component="div" className={styles.mainListTitle} >
                    Filters
            </ListSubheader>
            }
        >

            <ListItem button onClick={() => actionDispatcher(SET_ANIMALS_TYPES_COLLAPSED, { data: !showAnimalsTypesCollapsed })} >
                <ListItemText primary="Type" /> {showAnimalsTypesCollapsed ? < ExpandLess /> : < ExpandMore />} </ListItem>
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

            <ListItem button onClick={() => actionDispatcher(SET_ANIMALS_BREEDS_COLLAPSED, { data: !showANimalBreedsCollapsed })} >
                <ListItemText primary="Breeds" /> {showANimalBreedsCollapsed ? < ExpandLess /> : < ExpandMore />} </ListItem>

            {
                animalTypeSelectedBreeds.slice(animalsBreedsShowFrom, animalsBreedsShowUntil).map((currObj, index) => {
                    return (
                        <Collapse in={showANimalBreedsCollapsed} timeout="auto" unmountOnExit key={index} >
                            <List component="div" disablePadding className={styles.subList} > {renderAnimalsBreeds(currObj, index,)} </List>
                        </Collapse>
                    )
                })
            }

        </List>

    )

    function handleAnimalTypeSelected(typeSelected) {
        if (selectedAnimalTypeFilter !== typeSelected) {
            actionDispatcher(GET_PETS_BY_TYPE_BEGIN, { type: typeSelected });
            actionDispatcher(SET_SELECTED_ANIMAL_TYPE_FILTER, { data: typeSelected });
            actionDispatcher(GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, { data: typeSelected });
        }
    }

    function renderAnimalsBreeds(currObj, index,) {
        if (animalTypeSelectedBreeds.slice(animalsBreedsShowFrom, animalsBreedsShowUntil).length - 1 === index) {
            return (
                <ListItem >
                    <Box className={styles.directionsArrowsContainer}>
                        <Button variant="contained" className={styles.previousButton} onClick={() => onPreviousButtonClicked()} disabled={animalsBreedsShowFrom === 0}
                            startIcon={<NavigateBeforeIcon />}>
                            Previous
                            </Button>
                        <Button variant="contained" className={styles.nextButton} onClick={() => onNextButtonClicked()} disabled={animalsBreedsShowUntil >= animalTypeSelectedBreeds.length}
                            endIcon={<NavigateNextIcon />}>
                            Next
                        </Button>
                    </Box>
                </ListItem>
            )
        } else {
            return (
                <ListItem button onClick={() => alert("hola")}>
                    <ListItemIcon>
                        <MuiThemeProvider theme={theme}>
                            <Checkbox
                                edge="end"
                                checked={true}
                            />
                        </MuiThemeProvider>
                    </ListItemIcon>
                    <ListItemText primary={currObj.name} />
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