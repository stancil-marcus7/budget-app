import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test(`should set up default filter values`, () => {
    const state = filtersReducer(undefined, {type: `@@INIT`});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test(`should set sortBy to amount`, () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test(`should set sortBy to date`, () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toEqual('date');
});

test(`should set text filter`, () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', filter: 'pie'});
    expect(state.text).toEqual('pie');
});

test(`should set start date filter`, () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: 4000});
    expect(state.startDate).toEqual(4000);
});

test(`should set end date filter`, () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: 4000});
    expect(state.endDate).toEqual(4000);
});