import React from 'react';
import MyAppBar from './view';
import Adapter from 'enzyme-adapter-react-16';
import { configure, } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { PETS_FOUND_TEXT } from '../../Utilities/Constants';
import Typography from '@material-ui/core/Typography';


configure({ adapter: new Adapter() });


describe("Renders components with data", () => {
    const initialState = {
        filtersReducer: {
            showFiltersSection: true,
        },
        petsReducer: {
            petsPagination: {
                total_count: 30
            }
        }
    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<MyAppBar {...initialState} />)
    });



    it('Should render Typography when pets have been found', () => {

        let toFind = <Typography > {PETS_FOUND_TEXT} {initialState.petsReducer.petsPagination.total_count}</Typography>
        expect(wrapper.containsMatchingElement(toFind)).toBe(true);
    });


});



describe("Should render Typography even if there is no data", () => {
    const initialState = {
        filtersReducer: {
            showFiltersSection: true,
        },
        petsReducer: {
            petsPagination: {}
        }
    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<MyAppBar {...initialState} />)
    });



    it('Expect pets found to be 0', () => {

        let toFind = <Typography > {PETS_FOUND_TEXT} 0</Typography>
        expect(wrapper.containsMatchingElement(toFind)).toBe(true);
    });


});
