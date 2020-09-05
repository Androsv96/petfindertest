import React from 'react';
import Pets from './view';
import Adapter from 'enzyme-adapter-react-16';
import { configure, } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { PREVIOUS_BUTTON_TEXT, } from '../../Utilities/Constants';


configure({ adapter: new Adapter() });


describe("Renders components with data", () => {
    const initialState = {
        filtersReducer: {
            currentPage: 1,
            selectedAnimalTypeFilter: "",
            breedsSelected: [],
        },
        petsReducer: {
            petsData: [
                {
                    name: "Doggo",
                    breeds: {
                        primary: "Pug"
                    },
                    photos: [
                        { small: "smallPhoto", medium: "mediumPhoto", large: "largePhoto", full: "fullPhoto" },
                    ],
                },
            ],
            petsPagination: {},
            showPetsProgressOn: false,
        },
        utilitiesReducer: {
            hasInternetConnection: true,
        }

    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<Pets {...initialState} />);
    });



    it('render different elements', () => {

        let toFind = <img alt="petImg" />
        let secondToFind = <Button variant="contained" startIcon={<NavigateBeforeIcon />}>{PREVIOUS_BUTTON_TEXT}</Button>;
        expect(wrapper.containsMatchingElement(toFind)).toBe(true);
        expect(wrapper.containsMatchingElement(secondToFind)).toBe(true);
    });


});



describe("Rendering with no uncomplete data", () => {
    const initialState = {
        filtersReducer: {
            currentPage: 1,
            selectedAnimalTypeFilter: "",
            breedsSelected: [],
        },
        petsReducer: {
            petsData: [
                {
                    name: "Doggo",
                    breeds: {
                        primary: "Pug"
                    },
                    photos: [],
                },
            ],
            petsPagination: {},
            showPetsProgressOn: false,
        },
        utilitiesReducer: {
            hasInternetConnection: true,
        }

    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<Pets {...initialState} />);
    });



    it('Should render a default photo', () => {

        let toFind = <img alt="petImg" />
        expect(wrapper.containsMatchingElement(toFind)).toBe(true);
    });


});