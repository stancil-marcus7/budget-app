import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
    <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}/>);
})

test('should render expense list filters correctly', () =>{
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt date correctly', () =>{
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test(`should handle text change`, () => {
    const value = altFilters.text
    wrapper.find(`input`).at(0).simulate(`change`, {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test(`should sort by date`, () => {
    const value = 'date'
    wrapper.find('select').at(0).prop('onChange')({
        target:{value}
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test(`should sort by amount`, () => {
    const value = 'amount'
    wrapper.find('select').at(0).prop('onChange')({
        target:{value}
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test(`should handle text change`, () => {
    const value = {
        startDate: 0,
        endDate: 2
    }
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange') ({
        startDate: value.startDate,
        endDate: value.endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(value.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(value.endDate);
});

test(`should handle focus changes`, () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});