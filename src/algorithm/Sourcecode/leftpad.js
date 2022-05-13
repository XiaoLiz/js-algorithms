// 二分法
// leftpad nodejs 自带

// let s = 'hello'
// console.log(s.padStart(10, '0'))

function padleft(str, length, ch) {
	let leng = length - str.length + 1;
	return Array(leng).join(ch) + str;
}


// 运算符
function padleft2(str, length, ch) {
	let leng = length - str.length;
	let total = '';

	while (true) {
		// if (leng % 2 === 1) {
		if (leng & 1) {
			total += ch;
		}

		if (leng === 1) {
			return total + str;
		}

		ch += ch;
		leng = leng >> 1
		// leng = parseInt(leng / 2)
	}
}

console.time('leftpad');
for (let i = 0; i < 1000; i++) {
	padleft('hello', 1000, '0')
}
console.timeEnd('leftpad');


console.time('padleft2');
for (let i = 0; i < 1000; i++) {
	padleft2('hello', 1000, '0')
}
console.timeEnd('padleft2');


