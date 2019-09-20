import selectedExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses =[{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    //right now
    createdAt: 0  
},{
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
        //four days from now
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 4500,
        //four days into the future
        createdAt:  moment(0).add(4, 'days').valueOf()
    }
];

test('should filter by test value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectedExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectedExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectedExpenses(expenses, filters);
    //Sensitive to the order of the expenses. expense[1] came before expense[0] so it had to be put first
    expect(result).toEqual([expenses[0], expenses[1]]) 
})

