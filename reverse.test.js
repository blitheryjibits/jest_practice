const reverse = require('./reverse-string');

// it('works', () => {
// })

it('returns string', () => {
    expect(typeof reverse('the end of the day')).toBe('string')
})

it('returns error message for bad input', () => {
    expect(() => reverse(123)).toThrow(Error);
})

it('returns error message for bad input', () => {
    expect(() => reverse({name:'henry'})).toThrow(Error);
})

it('returns reversed string', () => {
    expect(reverse('the end of the day')).toBe('yad eht fo dne eht')
})