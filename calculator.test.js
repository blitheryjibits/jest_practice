const calculator = require('./calculator');

it('add', () => {
    expect(calculator.add(1,1)).toBe(2);
})

it('subtract', () => {
    expect(calculator.subtract(1,1)).toBe(0);
})

it('divide', () => {
    expect(calculator.divide(10,2)).toBe(5);
})

it('multiply', () => {
    expect(calculator.multiply(2,2)).toBe(4);
})

it('throws error for 3 arguments', () => {
    expect(() => calculator.add(1,1,1)).toThrow('Incorrect number of arguments provided');
})

it('throws error for 1 argument', () => {
    expect(() => calculator.add(1)).toThrow('Incorrect number of arguments provided');
})

it('throws error for non-number arguments', () => {
    expect(() => calculator.multiply('s',2)).toThrow('Incompatible type for operation');
})