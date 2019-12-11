import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'



export const ExpenseList = (props) => (

    <div className="content-container">
        <div className="list-header">
            <div>Expenses</div>
            <div className="amount-heading">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (<div className="list-item--message"><span>No expenses</span></div>) : 
                (props.expenses.map(expense => (
                    <ExpenseListItem key= {expense.id} {...expense}/>
                )))
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    }
};

export default connect(mapStateToProps)(ExpenseList);

