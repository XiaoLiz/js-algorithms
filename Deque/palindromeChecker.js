const deque = require('./Deque.js');
const { Deque } = require('./index.js');
console.log(deque);


function palindromeChecker(aString) {
    if(!aString) return false;


    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split('').join('');
    let isEqual = true;
    let firtsChar, lasrtChar;

    for (let i = 0; i< lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
    }

    while (deque.size() > 1 && isEqual) {
        firtsChar = deque.removeFront();
        lasrtChar = deque.removeBack();
        if (firtsChar !== lasrtChar) {
            isEqual = false
        }
    }

    return;
}

