const capitalizeString = require('./capitalize.js');
const caitilizeString = require('./capitalize.js');

it('returns string', () => {
    expect(capitalizeString(typeof 'the end of the day')).toBe('String')
})

it('returns string with capital', () => {
    expect(capitalizeString('the end of the day')).toBe('The end of the day')
})
