// 前端基于位运算组合权限认证

let STYLE = 1
let CLASS = 1<<1
let CHILDREN = 1<<2

//授权 |
let vnodeType = STYLE | CLASS

//判断 &
console.log('vnodeTtype STYLE', !!(vnodeType & STYLE))
console.log('vnodeTtype CLASS', !!(vnodeType & STYLE))
console.log('vnodeTtype CHILDREN', !!(vnodeType & CHILDREN))


