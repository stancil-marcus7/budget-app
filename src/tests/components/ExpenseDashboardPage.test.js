import {ExpenseDashboardPage} from "../../components/pages/ExpenseDashboardPage";
import { shallow } from 'enzyme';
import React from 'react';

test(  `should render with all the expsneses`, () => {
    const wrapper = shallow(<ExpenseDashboardPage expenseCount={3} expenseTotal={10}/>)
    expect(wrapper).toMatchSnapshot();
})
  
test(  `should render no expenses, when there are no expenses`, () => {
    const wrapper = shallow(<ExpenseDashboardPage expenseCount={0} expenseTotal={0}/>)
    expect(wrapper).toMatchSnapshot();
})