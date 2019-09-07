import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dash from '../components/nav/Dash'
import Header from '../components/nav/Header';
import AddExpensePage from '../components/pages/AddExpensePage';
import EditExpensePage from '../components/pages/EditExpensePage'
import HelpPage from '../components/pages/HelpPage';
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route path="/" component={Dash} exact/>
            <Route path="/create" component={AddExpensePage}/>
            {/* The :id will serve as a dynamic value parameter */}
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
