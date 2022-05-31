const fs = require('fs');

const path = require('path');
const dir = path.resolve(__dirname, './');

let files = fs.readdirSync(dir);
console.log(files)
let len = files.filter(file => {
	let reg = /^\d+\..+\.js$/;
	return reg.test(file);
}).length

console.log(`一共刷题${len}个`);