const Calculator = require("../code/calculator")
test('', () => {
    const calculator = new Calculator;
    expect(calculator.add(1, 2)).toBe(3)
    expect(calculator.multiply(1, 2)).toBe(2)
    expect(calculator.subtract(1, 2)).toBe(-1)
    expect(calculator.divide(1, 2)).toBe(0.5)
})