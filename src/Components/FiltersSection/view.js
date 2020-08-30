/* React */
import React, { useEffect, useState } from 'react';

/* Material-ui */
import ListSubheader from '@material-ui/core/ListSubheader';
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


/* Redux-actions */
import { GET_ANIMAL_TYPES_BEGIN, SET_SELECTED_ANIMAL_TYPE_FILTER, GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, } from '../../Redux/Actions';

/* Components */
import styles from './css.module.css';

export default function Filters({ filtersReducer, actionDispatcher }) {

    /* Store data */
    const { animalTypes, selectedAnimalTypeFilter, animalTypeSelectedBreeds, } = filtersReducer;

    /* Hooks */
    const [animalTypesCollapsed, setAnimalTypesCollapsed] = useState(false);
    const [selectedAnimalBreedsCollapsed, setSelectedAnimalBreedsCollapsed] = useState(false);
    useEffect(() => {
        if (animalTypes.length === 0) actionDispatcher(GET_ANIMAL_TYPES_BEGIN);
    });

    return (
        <List
            component="nav"
            className={styles.mainList}
            subheader={
                <ListSubheader component="div" className={styles.mainListTitle}>
                    Filters
              </ListSubheader>
            }
        >

            <ListItem button onClick={() => setAnimalTypesCollapsed(!animalTypesCollapsed)}>
                <ListItemText primary="Type" />
                {animalTypesCollapsed ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
                animalTypes.map((currObj, index) => {
                    return (
                        <Collapse in={animalTypesCollapsed} timeout="auto" unmountOnExit key={index}>
                            <List component="div" disablePadding className={styles.subList}>
                                <ListItem button onClick={() => handleAnimalTypeSelected(currObj.name)}>
                                    <ListItemIcon>
                                        <MuiThemeProvider theme={theme}>
                                            <Checkbox
                                                edge="end"
                                                checked={currObj.name === selectedAnimalTypeFilter}
                                            />
                                        </MuiThemeProvider>
                                    </ListItemIcon>
                                    <ListItemText primary={currObj.name} />
                                </ListItem>
                            </List>
                        </Collapse>
                    )
                })
            }

            <ListItem button onClick={() => setSelectedAnimalBreedsCollapsed(!selectedAnimalBreedsCollapsed)}>
                <ListItemText primary="Breeds" />
                {selectedAnimalBreedsCollapsed ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            {
                animalTypeSelectedBreeds.map((currObj, index) => {
                    return (
                        <Collapse in={selectedAnimalBreedsCollapsed} timeout="auto" unmountOnExit key={index}>
                            <List component="div" disablePadding className={styles.subList}>
                                <ListItem button onClick={() => alert("hola")}>
                                    <ListItemIcon>
                                        <MuiThemeProvider theme={theme}>
                                            <Checkbox
                                                edge="end"
                                                checked={currObj.name === selectedAnimalTypeFilter}
                                            />
                                        </MuiThemeProvider>
                                    </ListItemIcon>
                                    <ListItemText primary={currObj.name} />
                                </ListItem>
                            </List>
                        </Collapse>
                    )
                })
            }

        </List>

    )

    function handleAnimalTypeSelected(typeSelected) {
        actionDispatcher(SET_SELECTED_ANIMAL_TYPE_FILTER, { data: typeSelected });
        actionDispatcher(GET_BREEDS_BY_ANIMAL_TYPE_BEGIN, { data: typeSelected });
    }
}

/* Overrides Mui default theme */
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#fff"
        },
    }
});
