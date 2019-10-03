import moment from 'moment';


const filterReduceDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

//Filters Reducer
export default (state=filterReduceDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.filter
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                //Changed this to startDate in the action
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                //Changed this to startDate in the action
                endDate: action.endDate
            }
        default:
            return state;
    }
}
