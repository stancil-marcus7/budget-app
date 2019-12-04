import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Dash from '../components/nav/Dash'
import AddExpensePage from '../components/pages/AddExpensePage';
import EditExpensePage from '../components/pages/EditExpensePage'
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/pages/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
export const history = createHistory()

const AppRouter = () => (
    <Router history ={history}>
        <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact/>
            <PrivateRoute path="/dashboard" component={Dash} exact/>
            <PrivateRoute path="/create" component={AddExpensePage}/>
            {/* The :id will serve as a dynamic value parameter */}
            <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
)

export default AppRouter;
