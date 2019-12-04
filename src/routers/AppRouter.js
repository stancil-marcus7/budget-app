import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Dash from '../components/nav/Dash'
import Header from '../components/nav/Header';
import AddExpensePage from '../components/pages/AddExpensePage';
import EditExpensePage from '../components/pages/EditExpensePage'
import HelpPage from '../components/pages/HelpPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/pages/LoginPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history ={history}>
        <div>
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <PrivateRoute path="/dashboard" component={Dash} exact/>
            <PrivateRoute path="/create" component={AddExpensePage}/>
            {/* The :id will serve as a dynamic value parameter */}
            <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
)

export default AppRouter;
