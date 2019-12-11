import React from 'react';
import ExpenseForm from '../ExpenseForm'
import {connect} from 'react-redux' 
import {startAddExpense} from '../../actions/expenses'
export class AddExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    //This will switch us over to the home page
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Add Expense</h1>
            </div>
          </div>
          <div className="content-container">
            <ExpenseForm
                  button="Add Expense"
                  onSubmit={this.onSubmit}/>
          </div>
      </div>
    )
  }
}

//Allows you to create props out of dispatch
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
