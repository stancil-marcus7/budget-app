const add = (a, b) => a + b;

//You can pass in default values
const generateGreeting = (name = `Anonymous`) => `Hello ${name}`

test('should add two numbers', () => {
    const result = add(2,2);
    expect(result).toBe(4);
});

test(`Should return Hello Marcus`, () => {
    const result2 = generateGreeting("Marcus");
    expect(result2).toBe("Hello Marcus");
})

test(`Should return Hello Marcus`, () => {
    const result3 = generateGreeting();
    expect(result3).toBe("Hello Anonymous");
})
