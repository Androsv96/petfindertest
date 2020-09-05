import React from 'react';
import Filters from './view';
import Adapter from 'enzyme-adapter-react-16';
import { configure, } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { FILTER_TYPE_TEXT, FILTER_BREEDS_TEXT } from '../../Utilities/Constants';
import ListItemText from '@material-ui/core/ListItemText';


configure({ adapter: new Adapter() });


describe("Renders components with data", () => {
    const initialState = {
        filtersReducer: {
            animalTypes: [{ name: "Dog" }, { name: "Cat" }],
            petsBreeds: [{ name: "Pug", }, { name: "Akita" }],
            selectedAnimalTypeFilter: "Dog",
            showAnimalsTypesCollapsed: true,
            breedsSelected: ["Pug"],
            showANimalBreedsCollapsed: false,
            animalsBreedsShowFrom: 1,
            animalsBreedsShowUntil: 10,
        },
    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<Filters {...initialState} />);
    });



    it('render different elements', () => {

        let toFind = <ListItemText primary={FILTER_TYPE_TEXT} />
        let secondToFind = <ListItemText primary={initialState.filtersReducer.animalTypes[0].name} />
        let thirdToFind = <ListItemText primary={FILTER_BREEDS_TEXT} />
        expect(wrapper.containsMatchingElement(toFind)).toBe(true);
        expect(wrapper.containsMatchingElement(secondToFind)).toBe(true);
        expect(wrapper.containsMatchingElement(thirdToFind)).toBe(true);
    });


});