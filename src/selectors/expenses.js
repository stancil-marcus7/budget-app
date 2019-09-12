// Queries for expenses

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createAt < b.createdAt ? 1 : -1;
            //Printing by amount in descending order
        } else if (sortBy === 'amount'){
            return b.amount - a.amount;
        }
    })
}