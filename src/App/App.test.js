import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import MyComponent from './';
import rootSaga from '../Sagas/';
import configureStore from '../Redux/Store';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

const setup = (initialState = {}) => {

  let store = configureStore();
  store.runSaga(rootSaga);

  const wrapper = mount(<Provider store={store}><MyComponent /></Provider>)
  let AppbarContainer = wrapper.find('AppbarContainer');
  expect(AppbarContainer.getElement("div"))
}

setup()