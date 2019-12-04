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

export const history = createHistory()

const AppRouter = () => (
    <Router history ={history}>
        <div>
        <Header/>
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/dashboard" component={Dash} exact/>
            <Route path="/create" component={AddExpensePage}/>
            {/* The :id will serve as a dynamic value parameter */}
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
)

export default AppRouter;
