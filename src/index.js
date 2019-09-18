import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from  './selectors/expenses'
//import Redux101 from './playground/Redux101';
//import ReduxExpen from './playground/redux-expensify';
//import Destructuring from '../src/playground/Destructuring'
import AuthInfo from "./playground/hoc"
const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

store.dispatch(addExpense({
    description:'Rent bill',
    createdAt: 109500
}));

store.dispatch(addExpense({
    description: 'Water bill',
    amount: '123',
    createdAt: 4500
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    createdAt: 1000
}));

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
