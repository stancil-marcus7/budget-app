import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import ExpenseListFilters from '../components/ExpenseListFilters'


const ExpenseList = (props) => (
    <div>
        <ExpenseListFilters/>
        {props.expenses.map(expense => (
            <ExpenseListItem key= {expense.id} {...expense}/>
        ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    }
};

export default connect(mapStateToProps)(ExpenseList);

