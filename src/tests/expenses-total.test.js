import getExpenseTotal from "../expenses-total";
import expenses from "./fixtures/expenses";

test('should return 0 if there are no expenses', ()=> {
    const result = getExpenseTotal([]);
    expect(result).toEqual(0);
})

test('should return 195 if the first expense is entered', ()=> {
    const result = getExpenseTotal([expenses[0]]);
    expect(result).toBe(195);
})

test('should return 114195 if all the expenses are entered', ()=> {
    const result = getExpenseTotal(expenses);
    expect(result).toBe(114195);
}) 