import React from 'react';
import PetsDetail from './view';
import Adapter from 'enzyme-adapter-react-16';
import { configure, } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import PetsIcon from '@material-ui/icons/Pets';


configure({ adapter: new Adapter() });


describe("Renders components with data", () => {
    const initialState = {
        petsReducer: {
            petsShowDetail: true,
            petSelected: {
                name: "Akita",
                photos: [
                    { small: "smallImage", medium: "mediumImage", large: "largeImage", full: "fullImage" },
                ],
                breeds: {
                    primary: "Pug"
                },
                age: "Young",
                gender: "Male",
                size: "Small",
                colors: {
                    primary: "Yellow"
                },
                coat: "Large",
                attributes: {
                    house_trained: true
                },
                description: "Any description"

            },
        },
    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<PetsDetail {...initialState} />);
    });



    it('render different elements', () => {

        let toFind = <CancelIcon />;
        let secondToFind = <img alt="petImage" />;
        let thirdToFind = <Chip label={initialState.petsReducer.petSelected.colors.primary} />
        expect(wrapper.containsMatchingElement(toFind)).toBe(true);
        expect(wrapper.containsMatchingElement(secondToFind)).toBe(true);
        expect(wrapper.containsMatchingElement(thirdToFind)).toBe(true);
    });


});




describe("Should not render some components", () => {
    const initialState = {
        petsReducer: {
            petsShowDetail: true,
            petSelected: {
                name: "Akita",
                photos: [],
                breeds: {
                    primary: "Pug"
                },
                age: "Young",
                gender: "Male",
                size: "Small",
                colors: {
                    primary: "Yellow"
                },
                coat: "",
                attributes: {
                    house_trained: true
                },
                description: "Any description"

            },
        },
    }

    let shallow;
    let wrapper;

    beforeAll(() => {
        shallow = createShallow({ dive: true });
    });

    beforeEach(() => {
        wrapper = shallow(<PetsDetail {...initialState} />);
    });



    it('Must not render some components', () => {

        let toFind = <Chip label={initialState.petsReducer.petSelected.coat} />;
        let secondToFind = <img alt="petImage" />;
        expect(wrapper.containsMatchingElement(toFind)).toBe(false);
        expect(wrapper.containsMatchingElement(secondToFind)).toBe(false);
    });


});