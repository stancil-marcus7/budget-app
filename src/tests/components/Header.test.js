import Header from '../../components/nav/Header' 
import {shallow} from 'enzyme';
import React from 'react'


test(`should render header correctly`, () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find(`h1`).text()).toBe(`Expensify`);
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
