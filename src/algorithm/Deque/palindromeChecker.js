const Deque = require('./index.js')
console.log(Deque)

function palindromeChecker(aString) {
  if (!aString)
    return false

  const deque = new Deque()
  const lowerString = aString.toLocaleLowerCase().split('').join('')
  let isEqual = true
  let firtsChar, lasrtChar

  for (let i = 0; i < lowerString.length; i++)
    deque.addBack(lowerString.charAt(i))

  while (deque.size() > 1 && isEqual) {
    firtsChar = deque.removeFront()
    lasrtChar = deque.removeBack()
    if (firtsChar !== lasrtChar)
      isEqual = false
  }

  return isEqual
}

console.log('a', palindromeChecker('a'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level', palindromeChecker('level'))
console.log('was it a car or a cat I saw', palindromeChecker('was it a car or a cat I saw'))
console.log('Step on no pets', palindromeChecker('Step on no pets'))
