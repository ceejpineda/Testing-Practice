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
test('Test for symbols', ()=>{
    expect(caesarCipher('a!bc',1)).toBe('b!cd');
});
test('Test for negative shift', ()=>{
    expect(caesarCipher('a!bc',-1)).toBe('z!ab');
});
test('Test for positive negative shift', ()=>{
    expect(caesarCipher('a!bc',99)).toBe('v!wx');
});
test('Test for extreme negative shift', ()=>{
    expect(caesarCipher('a!bc',-99)).toBe('f!gh');
});