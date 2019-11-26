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
        <h1>Add Expense</h1>
          <ExpenseForm
            onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

//Allows you to create props out of dispatch
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
