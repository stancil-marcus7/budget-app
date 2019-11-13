const expensesReducerDefaultState = [];

//Expenses Reducer
export default (state=expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                console.log("expense.id " + expense.id + " action.id " + action.id)
                if (expense.id === action.id){
                    console.log("I got updated")
                    return {
                        ...expense,
                        ...action.updates
                        };
                } else {
                    console.log("I didnt get updated")
                    return expense;
                };
            });
        default:
            //When default is called it will return the default state
            return state;
    }
};
