import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import App from '../../App';

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render App correctly', () => {
  const wrapper = shallow(<App />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
