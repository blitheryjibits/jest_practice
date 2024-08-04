const cipher = require('./ceasar-cipher');

it('returns string', () => {
    expect(typeof cipher('abc', 3)).toBe('string');
})

it('returns cipher', () => {
    expect(cipher('abc', 3)).toBe('def');
})

it('loops through alphabet', () => {
    expect(cipher('xyz', 3)).toBe('abc');
})

it('keeps capital letters', () => {
    expect(cipher('aBc', 3)).toBe('dEf');
})

it('keeps capital letters while looping', () => {
    expect(cipher('XYZ', 3)).toBe('ABC');
});

it("doesn't change punctuation", () => {
    expect(cipher('hello, world!', 3)).toBe('khoor, zruog!')
})

it("doesn't change punctuation and keeps capitals", () => {
    expect(cipher('HeLlo!', 3)).toBe('KhOor!')
})
