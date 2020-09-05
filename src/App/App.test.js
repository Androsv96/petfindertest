import React from 'react';
import { mount, shallow } from 'enzyme';
import MyComponent from './';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

const configureMockStore = configureStore();
configure({ adapter: new Adapter() });

const initialState = {
  petsReducer: {
    petsData: [],
    petsPagination: {},
    petsShowDetail: false,
    petSelected: {},
    showPetsProgressOn: false,
  },
  filtersReducer: {
    showFiltersSection: true,
    animalTypes: [],
    petsBreeds: [],
    selectedAnimalTypeFilter: "",
    showAnimalsTypesCollapsed: true,
    showANimalBreedsCollapsed: false,
    animalsBreedsShowFrom: 0,
    animalsBreedsShowUntil: 10,
    breedsSelected: [],
    currentPage: 1,
    showFiltersProgressOn: false,
  },
  utilitiesReducer: {
    hasInternetConnection: true,
  }
}

const store = configureMockStore(initialState);

it('Testing App component', () => {
  const wrapper = shallow(<MyComponent store={store} />).dive();
  expect(wrapper.getElements()).toMatchSnapshot();
})