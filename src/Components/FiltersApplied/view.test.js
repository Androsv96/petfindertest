import React from 'react';
import FiltersApplied from './view';
import Adapter from 'enzyme-adapter-react-16';
import { configure, } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { FILTERS_APPLIED_TEXT } from '../../Utilities/Constants';


configure({ adapter: new Adapter() });


describe("Renders components with data", () => {
    const initialState = {
        filtersReducer: {
            selectedAnimalTypeFilter: "",
            breedsSelected: ["Pug"],
        }
    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<FiltersApplied {...initialState} />)
    });



    it('Renders typography for title if there is at least 1 selected breed.', () => {

        let toFind = <Typography >{FILTERS_APPLIED_TEXT}</Typography>
        expect(wrapper.containsMatchingElement(toFind)).toBe(true);

    });

    it('Should render Chip if there is at least 1 selected breed', () => {

        let toFind = <Chip label={initialState.filtersReducer.breedsSelected[0]} />
        expect(wrapper.containsMatchingElement(toFind)).toBe(true)

    });

});


describe("Does not render components whenere there is no data", () => {
    const initialState = {
        filtersReducer: {
            selectedAnimalTypeFilter: "",
            breedsSelected: [],
        }
    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<FiltersApplied {...initialState} />)
    });



    it('Should not render Typography because no data provided', () => {

        let toFind = <Typography >{FILTERS_APPLIED_TEXT}</Typography>
        expect(wrapper.containsMatchingElement(toFind)).toBe(false);

    });

    it('Should not render Chip because no data provided', () => {

        let toFind = <Chip label={initialState.filtersReducer.breedsSelected[0]} />
        expect(wrapper.containsMatchingElement(toFind)).toBe(false)

    });

});