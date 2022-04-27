const Stack = require('./stackObject.js')

function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem = 0
  let binaryString = ''

  if (!(base >= 2 && base <= 36))
    return ''

  while (number > 0) {
    rem = Math.floor(number % base) // 取模
    remStack.push(rem)
    console.log(remStack.items, 'items')

    number = Math.floor(number / base) // 用于判断是否整除
  }

  console.log(remStack.isEmpty(), 'remStack.isEmpty()')

  while (!remStack.isEmpty()) {
    // console.log(remStack.pop(), 'remStack.pop(x)')
    binaryString += digits[remStack.pop()]
    // binaryString += remStack.pop().toString();
  }

  return binaryString
}

// 抽象成不同进制数据转换

baseConverter(10, 2)
console.log(baseConverter(10, 2))

