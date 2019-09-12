import React from 'react';
import {NavLink} from "react-router-dom"

const Header = () => (
  <header>
      <nav>
          <h1>Expensify</h1>
          <NavLink activeClassName="is-active" to="/" exact>Dashboard</NavLink>
          <NavLink activeClassName="is-active" to="/create">Add Expense</NavLink>
          <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
          <NavLink activeClassName="is-active" to="/help">Help Page</NavLink>
      </nav>
  </header>
)

export default Header;
