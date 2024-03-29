import React from 'react';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//ADD_EXPENSE
//The empty brackets means the object will default to an empty object if nothing is passed in
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0} = {}
        ) => ({
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
            }
})

//REMOVE_EXPENSE
const removeExpense = ({id})=> ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET_TEXT_FILTER
const setFilterText = (filter = '') => ({
    type: 'SET_TEXT_FILTER',
    filter
})

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

//SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
}) 

//SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
}) 

const expensesReducerDefaultState = [];

//Expenses Reducer
const expensesReducer = (state=expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                        };
                } else {
                    return expense;
                };
            });
        default:
            //When default is called it will return the default state
            return state;
    }
};

const filterReduceDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

//Filters Reducer
const filtersReducer = (state=filterReduceDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.filter
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createAt < b.createdAt ? 1 : -1;
            //Printing by amount in descending order
        } else if (sortBy === 'amount'){
            return b.amount - a.amount;
        }
    })
}

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

let expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 1000
}));

let expenseTwo = store.dispatch(addExpense({
    description: 'Hoes',
    amount: 10,
    createdAt: -1000
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

//store.dispatch(setFilterText('Re'));

//store.dispatch(sortByDate());

store.dispatch(sortByAmount());

//store.dispatch(setStartDate(2000));

// store.dispatch(setStartDate());

//store.dispatch(setEndDate(1250));

const user = {
    name: 'Marc',
    age: 23
}

console.log({
            ...user,
            location: 'Philly',
            age: 24
        });

const demoState = {
    expense: [{
        id: 'poidsfsdfsdf',
        descritption: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const ReduxExpen = () => {
 return (
     <div>

     </div>
 )
}

export default ReduxExpen;