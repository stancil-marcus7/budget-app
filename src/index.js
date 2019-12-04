import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import {history} from './routers/AppRouter'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import 'react-dates/lib/css/_datepicker.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
//import Redux101 from './playground/Redux101';
//import ReduxExpen from './playground/redux-expensify';
//import Destructuring from '../src/playground/Destructuring'
import AuthInfo from "./playground/hoc"
import { firebase } from './firebase/firebase'; 

// import './playground/promise'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

let hasRendered = false;

const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user){;
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            //If user is at the homepage and logs in, they go to the dashboard
            if(history.location.pathname === '/')
            {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/');
    }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
