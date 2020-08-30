/* React */
import React, { useEffect } from 'react';

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

/* Redux-actions */
import { GET_ANIMAL_TYPES_BEGIN } from '../../Redux/Actions';

export default function Filters({ filtersReducer, actionDispatcher }) {

    /* Store data */
    const { animalTypes } = filtersReducer;
    console.log(animalTypes)

    /* Hooks */
    useEffect(() => {
        if (animalTypes.length === 0) actionDispatcher(GET_ANIMAL_TYPES_BEGIN);
    });

    return (
        <List
            component="nav"
            subheader={
                <ListSubheader component="div">
                    Filters
              </ListSubheader>
            }
            style={{ backgroundColor: "white" }}
        >

            <ListItem button >
                <ListItemText primary="Type" />
                {true ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {
                animalTypes.map((currObj, index) => {
                    return (
                        <Collapse in={true} timeout="auto" unmountOnExit key={index}>
                            <List component="div" disablePadding style={{ backgroundColor: "white" }}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="end"
                                            checked={false}
                                        />
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
}