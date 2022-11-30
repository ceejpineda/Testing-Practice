const caesarCipher = require('./caesarCipher');

test('Test for Capital Letters', ()=>{
    expect(caesarCipher('ABC',1)).toBe('BCD');
});

test('Test for Small Letters', ()=>{
    expect(caesarCipher('abc',2)).toBe('cde');
});

test('Test for Z+ Capital Letters', ()=>{
    expect(caesarCipher('XYZ',3)).toBe('ABC');
});

test('Test for z+ Capital Letters', ()=>{
    expect(caesarCipher('xyz',3)).toBe('abc');
});