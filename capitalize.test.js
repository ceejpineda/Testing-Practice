const capitalize = require('./capitalize');

test('Capitalize the first character in the input', () => {
  expect(capitalize('hello')).toBe('Hello');
});