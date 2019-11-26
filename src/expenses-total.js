export default (expenses) => {
    const sum = expenses.reduce((sum,amount) => sum + amount.amount, 0);
    return sum;
}
