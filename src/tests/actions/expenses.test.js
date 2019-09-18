import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test(`should setip remove expense action object`,() => {
    const action = removeExpense({ id: `123abc`})
    expect(action).toEqual({
        type: 'REMOVE EXPENSE',
        id: '123abc'
    })
})