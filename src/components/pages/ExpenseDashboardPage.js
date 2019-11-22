import React from 'react';
import getExpenseTotal from "../../actions/expenses-total";
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses'

export class ExpenseDashboardPage extends React.Component{
    render(){
        return (
            <div>
                <p>Viewing {this.props.expenseCount} {this.props.expenseCount > 1 || this.props.expenseCount === 0 ? "expenses " : "expense "} totalling {numeral(this.props.expenseTotal/100).format('$0,0.00')}</p>
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