import React from 'react';
import { shallow } from 'enzyme';
import Dash from '../../components/nav/Dash';

test(`should render the dash correctly`, () => {
    const wrapper = shallow(<Dash/>);
    expect(wrapper).toMatchSnapshot();
});