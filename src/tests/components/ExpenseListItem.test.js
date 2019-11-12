import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';
import React from 'react';

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})