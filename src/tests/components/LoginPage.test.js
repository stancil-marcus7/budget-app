import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/pages/LoginPage'

test(`should render LoginPage correctly`, () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
})