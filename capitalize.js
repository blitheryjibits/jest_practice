
function capitalizeString(string) {
    if (typeof string !== 'string') {
        throw new Error('Argument did not matched the type String.');
    }
    return string = string.replace(string[0], string[0].toUpperCase());
}

module.exports = capitalizeString;