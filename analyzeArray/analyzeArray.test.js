const analyzeArray = require('./analyzeArray');

test('Test with normal values', () =>{
    expect(analyzeArray([1,2,3])).toStrictEqual({"average":2,"min":1,"max":3,"length":3});
})
test('Test with negative values', () =>{
    expect(analyzeArray([1,2,-3,-9])).toStrictEqual({"average":-2.25,"min":-9,"max":2,"length":4});
})