import Header from '../../components/nav/Header' 
import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import { exportAllDeclaration } from '@babel/types';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});