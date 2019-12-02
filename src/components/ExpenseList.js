import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'



export const ExpenseList = (props) => (
    
    <div>
        {
            props.expenses.length === 0 ? (<p>You have no expenses</p>) : 
            (props.expenses.map(expense => (
                <ExpenseListItem key= {expense.id} {...expense}/>
            )))
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    }
};

export default connect(mapStateToProps)(ExpenseList);

