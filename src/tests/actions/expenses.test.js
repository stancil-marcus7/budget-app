import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test(`should set up remove expense action object`,() => {
    const action = removeExpense({ id: `123abc`})
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
});

test(`should edit expense`, () => {
    const action = editExpense('123', {amount: 1})
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: {amount: 1}
    })
})

test(`should set up add expense object with provided values`, () => {
    const expenseData = { 
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
}) 

test('should set up add expense action object with default values', () => {
    const defaultData = {
        description: '', 
        note: '', 
        amount:  0, 
        createdAt: 0
    }

    const action = addExpense(defaultData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultData,
            id: expect.any(String)
        }
    })
})