import React from 'react';
import getExpenseTotal from "../../expenses-total";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses'

export class ExpenseDashboardPage extends React.Component{
    render(){
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{this.props.expenseCount}</span> {this.props.expenseCount > 1 || this.props.expenseCount === 0 ? "expenses " : "expense "} totalling <span>{numeral(this.props.expenseTotal/100).format('$0,0.00')}</span></h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expenseTotal: getExpenseTotal(selectExpenses(state.expenses, state.filters))
    }
}



export default connect(mapStateToProps)(ExpenseDashboardPage); 