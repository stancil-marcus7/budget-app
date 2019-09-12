import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        focused: false,
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(({ description }))
    }

    onNoteChange = (e) => {
        //could use e.persist();
        const note = e.target.value;
        this.setState({ note });
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState({ amount })
        }
    }

    //Called whenever the user changes the date
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ focused }));
    }

    render() {
        return (
            <div>
                <form>            
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}/>
                    <input
                    //Switching this to text to limit the amount of decimal
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>   
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        // Limits the amount of months you can see
                        numberOfMonths={1}
                        // Allows user to pick past days
                        isOutsideRange={() => false}/>
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;