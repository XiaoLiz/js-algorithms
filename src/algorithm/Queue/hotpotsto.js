const utils = require('./index.js')
console.log(utils)

function hotPotato(ele, num) {
  const queue = new utils.Queue()
  const elimitateList = []

  for (let i = 0; i < ele.length; i++)
    queue.enqueue(ele[i])

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++)
      queue.enqueue(queue.dequeue())

    elimitateList.push(queue.dequeue())
  }

  return {
    eliminated: elimitateList,
    winner: queue.dequeue(),
  }
}

const eles = ['zhangsan', 'tom', 'jack', 'fank', 'xiaoer']
const result = hotPotato(eles, 7)

result.eliminated.forEach((name) => {
  console.log(`${name}: 在击鼓传花游戏中被淘汰`)
})

console.log(`胜利者：${result.winner}`)
