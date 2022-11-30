//import calculator from './calculator'
const calculator = require('./calculator')

test('Addition', ()=>{
    expect(calculator.add(3,5)).toBe(8);
});
test('Subtraction', ()=>{
    expect(calculator.subtract(3,5)).toBe(-2);
});
test('Multiplication', ()=>{
    expect(calculator.multiply(3,5)).toBe(15);
});
test('Division', ()=>{
    expect(calculator.divide(3,5)).toBe(3/5);
});