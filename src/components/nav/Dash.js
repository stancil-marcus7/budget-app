import React from 'react';
import ExpenseList from '../ExpenseList';
import ExpenseListFilters from '../../components/ExpenseListFilters'
const Dash = () => (
  <div>
      <ExpenseListFilters/>
      <ExpenseList/>
  </div>
)

export default Dash;
