const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(param) {
    this.param = param;

    this.letters = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26};
    
    this.temp = [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'BCDEFGHIJKLMNOPQRSTUVWXYZA', 
        'CDEFGHIJKLMNOPQRSTUVWXYZAB', 'DEFGHIJKLMNOPQRSTUVWXYZABC', 
        'EFGHIJKLMNOPQRSTUVWXYZABCD', 'FGHIJKLMNOPQRSTUVWXYZABCDE', 
        'GHIJKLMNOPQRSTUVWXYZABCDEF', 'HIJKLMNOPQRSTUVWXYZABCDEFG', 
        'IJKLMNOPQRSTUVWXYZABCDEFGH', 'JKLMNOPQRSTUVWXYZABCDEFGHI', 
        'KLMNOPQRSTUVWXYZABCDEFGHIJ', 'LMNOPQRSTUVWXYZABCDEFGHIJK', 
        'MNOPQRSTUVWXYZABCDEFGHIJKL', 'NOPQRSTUVWXYZABCDEFGHIJKLM', 
        'OPQRSTUVWXYZABCDEFGHIJKLMN', 'PQRSTUVWXYZABCDEFGHIJKLMNO', 
        'QRSTUVWXYZABCDEFGHIJKLMNOP', 'RSTUVWXYZABCDEFGHIJKLMNOPQ', 
        'STUVWXYZABCDEFGHIJKLMNOPQR', 'TUVWXYZABCDEFGHIJKLMNOPQRS',
        'UVWXYZABCDEFGHIJKLMNOPQRST', 'VWXYZABCDEFGHIJKLMNOPQRSTU', 
        'WXYZABCDEFGHIJKLMNOPQRSTUV', 'XYZABCDEFGHIJKLMNOPQRSTUVW', 
        'YZABCDEFGHIJKLMNOPQRSTUVWX', 'ZABCDEFGHIJKLMNOPQRSTUVWXY'
    ];
}


encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error(`Incorrect arguments!`);
    if (typeof str === 'string' && typeof key === 'string') {
        
        let length = str.toUpperCase().length;
        let newStr = this.getSubstring(str, key);
        let res = '';

        for (let i = 0; i < length; i++) {
            if (this.letters[newStr[i]]) {
                res += this.temp[this.letters[newStr[i]] - 1][this.letters[str.toUpperCase()[i]] - 1];
            } else {
                res += str.toUpperCase()[i];
            }
        }
        return (this.param === false) ? res.split('').reverse().join('') : res;
    }
}

decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error(`Incorrect arguments!`);
    if (typeof str === 'string' && typeof key === 'string') {       
        let length = str.toUpperCase().length;
        let newStr = this.getSubstring(str, key);
        let res = '';

        for (let i = 0; i < length; i++) {
            if (this.letters[newStr[i]]) {
                let index = this.temp[this.letters[newStr[i]] - 1].indexOf(str.toUpperCase()[i]);
                res += this.temp[0][index];
            } else {
                res += str.toUpperCase()[i];
            }
        }

        return (this.param === false) ? res.split('').reverse().join('') : res;
    }
}

getSubstring(str, key) {    
    let newStr = '';
    let length = str.toUpperCase().length;

    for (let i = 0, j = 0, lengthKey = key.length; i < length; i++) {
        if (j == lengthKey) { j = 0; }
        if (this.letters[str.toUpperCase()[i]]) {
            newStr += key[j].toUpperCase();
            j++;
        } else {
            newStr += str.toUpperCase()[i];
        }
    }
    return newStr;
}
}

module.exports = {
  VigenereCipheringMachine
};
