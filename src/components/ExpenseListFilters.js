import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null 
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        //have to use this.props because this is a class based component
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if (e.target.value === "date"){
            this.props.sortByDate();
        } else if (e.target.value === "amount"){
            this.props.sortByAmount();
        }
    }

    render(){
        return (
            <div>
                {/* Sets the text filter */}
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}/>
                {/* Sets the sortBy filter */}
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="MyDatePickerStart"
                    endDateId="MyDatePickerEnd"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    //need all params from action
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setStartDate: (endDate) => dispatch(setEndDate(endDate))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);