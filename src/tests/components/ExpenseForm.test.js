import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test(`should render the expense form correctly`, () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test(`should render the expense form correctly with an expense`, () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test(`should render error for invalid form submission`, () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test(`should set description on input change`, () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    //at refers to a certain element in the list of elements
    wrapper.find(`input`).at(0).simulate(`change`, {
        target: {value}
    });
    expect(wrapper.state(`description`)).toBe(value)
})

test(`should set note on textarea change`, () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    //at refers to a certain element in the list of elements
    wrapper.find(`textarea`).at(0).simulate(`change`, {
        target: {value}
    });
    expect(wrapper.state(`note`)).toBe(value)
})

test(`should set amount on input change`, () => {
    const value = '12.2';
    const wrapper = shallow(<ExpenseForm />);
    //at refers to a certain element in the list of elements
    wrapper.find(`input`).at(1).simulate(`change`, {
        target: {value}
    });
    expect(wrapper.state(`amount`)).toBe(value)
})

test(`should not set amount on input change`, () => {
    const value = '12.22222';
    const wrapper = shallow(<ExpenseForm />);
    //at refers to a certain element in the list of elements
    wrapper.find(`input`).at(1).simulate(`change`, {
        target: {value}
    });
    expect(wrapper.state(`amount`)).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    onSubmitSpy(`Andrew`);
    expect(onSubmitSpy).toHaveBeenCalledWith(`Andrew`, `Philadelphia`);
})