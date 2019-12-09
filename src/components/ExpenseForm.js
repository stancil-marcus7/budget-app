import 'react-dates/initialize';

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


class ExpenseForm extends React.Component {
    constructor(props){
        //Geting props from parent component
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        };
    }

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
        //If there is no amount or if the amount matches the format, it will be changed
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState({ amount })
        }
    }

    //Called whenever the user changes the date
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({ createdAt }))
        }
        
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please provide description and amount'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (    
            <form className="form" onSubmit={this.onSubmit}>  
                {this.state.error && <p className="form__error">{this.state.error}</p>}         
                <input
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>
                <input
                    className="text-input"
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
                    block={true}
                    isOutsideRange={() => false}/>
                <textarea 
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    onChange={this.onNoteChange}>
                </textarea>
                <button>Add Expense</button>
            </form>
        )
    }
}

export default ExpenseForm;