import React from 'react';
import ExpenseList from '../ExpenseList';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import ExpenseDashboardPage from '../pages/ExpenseDashboardPage';
const Dash = () => (
  <div>
      <ExpenseDashboardPage/>
      <ExpenseListFilters/>
      <ExpenseList/>
  </div>
)

export default Dash;
