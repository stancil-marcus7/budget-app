import database from '../firebase/firebase'

//ADD_EXPENSE
//The empty brackets means the object will default to an empty object if nothing is passed in
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        
        return database.ref(`users/${uid}/expenses`).push(expense)
        .then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
}

//REMOVE_EXPENSE
export const removeExpense = ({id})=> ({
    type: 'REMOVE_EXPENSE',
    id
})

//START_REMOVE_EXPENSE
export const startRemoveExpense = ({id}) => {
        console.log(id)
        return (dispatch, getState) => 
        { 
            const uid = getState().auth.uid;
            return database.ref(`users/${uid}/expenses/${id}`).remove()
            .then(() => {
                console.log('Data was deleted')
                dispatch(removeExpense({id: id}));
        })
        .catch(e => {
            console.log('Did not delete data')
        });
    }
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


//SET_EXPENSES
export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
})

//START_EDIT_EXPENSES
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
        
    }
}


//START_SET_EXPENSES
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
        .once('value')
        .then(snapshot => {
            const expenses = [];

            snapshot.forEach((childSnapshot)=> {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            })
            console.log(expenses);
            dispatch(setExpenses(expenses));
        })
    }
}