import moment from 'moment';
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate, } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    })
})

test(`should sort by dates`, () => {
    // const action = sortByDate();
    // expect(action).toEqual({
    //     type: 'SORT_BY_DATE'
    // })

    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
})

test(`should sort by amount`, () => {
    // const action = sortByAmount();
    // expect(action).toEqual({
    //     type: 'SORT_BY_AMOUNT',
    // })

    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
})

test(`should sort by filter text`, () => {
    const action = setTextFilter('gas');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: 'gas'
    })
})

test(`should sort by default filter text value`, () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: ''
    })
})
