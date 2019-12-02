import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../../actions/expenses'

export class EditExpensePage extends React.Component {
render(){
  return (
    <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={expense => {
          this.props.startEditExpense(this.props.expense.id, expense);
          this.props.history.push('/');
        }}
        />
        <button onClick={expense => {
            this.props.startRemoveExpense({id: this.props.expense.id})
            this.props.history.push('/')
          }}
            
        >Remove</button>
    </div>
  )
} 
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  //need all params from action
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (expense) => dispatch(startRemoveExpense({id: expense.id}))
})
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
