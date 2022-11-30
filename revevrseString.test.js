const reverseString = require('./reverseString');

test('Reverses the tring to be inputted', ()=>{
    expect(reverseString('Hello')).toBe('olleH');
});