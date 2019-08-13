import React from 'react';
import AddExpensePage from "../pages/AddExpensePage"
import EditExpensePage from '../pages/EditExpensePage'
import HelpPage from "../pages/HelpPage"
import NotFoundPage from "../pages/NotFoundPage"
import {NavLink} from "react-router-dom"

const Header = () => (
  <header>
      <nav>
          <h1>Expensify</h1>
          <NavLink activeClassName="is-active" to="/" exact>Go Home!</NavLink>
          <NavLink activeClassName="is-active" to="/create">Add Expense</NavLink>
          <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
          <NavLink activeClassName="is-active" to="/help">Help Page</NavLink>
      </nav>
  </header>
)

export default Header;
