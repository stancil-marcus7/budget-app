import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

//Going to use test redux store to test this
test(`should add expense to database and store`, (done)=>{
    const store = createMockStore({});

    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: `This one `,
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            //addExpense is the first action, hence the 0
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            })

            return database.ref(`expenses/${actions[0].expense.id}`).once(`value`);
            //This will get jest to wait until everything is finished; asynchronous processing    
        }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})
// test(`should set up add expense object with provided values`, () => {
//     const expenseData = { 
//         description: 'Rent',
//         amount: 109500,
//         createdAt: 1000,
//         note: 'This was last months rent'
//     }
//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// }) 

test('should set up add expense action object with default values', (done) => {
    const store = createMockStore({});

    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            //addExpense is the first action, hence the 0
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            })

            return database.ref(`expenses/${actions[0].expense.id}`).once(`value`);
            //This will get jest to wait until everything is finished; asynchronous processing    
        }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});