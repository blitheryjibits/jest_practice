function reverse(string) {
    if (typeof string !== 'string') {
        throw new Error('Argument did not matched the type String.');
    }
    return string = [...string].reverse().join('');
}

module.exports = reverse;