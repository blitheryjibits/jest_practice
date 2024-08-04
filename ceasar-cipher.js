function cipher(string, shift) {
    result = '';
    for (let i = 0; i <= string.length-1; i++) {
       result += shiftLetter(string.charCodeAt(i), shift);
    } 
    return result
}

function shiftLetter(charCode, shift) {
    let letter;

    if (charCode <= 90 && charCode >= 65) {
        if ((charCode + shift) > 90) {letter = (charCode + shift) - 26;}
        else {letter = (charCode + shift);}
    }
    else if (charCode >= 97 && charCode <= 122) {
        if ((charCode + shift) > 122) {letter = (charCode + shift) - 26;}
        else {letter = (charCode + shift);}
    }
    else {
        letter = charCode;
    }

    return String.fromCharCode(letter);

}

cipher('xyz', 3);

module.exports = cipher;