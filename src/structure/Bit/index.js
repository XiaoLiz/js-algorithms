// 前端基于位运算组合权限认证

const STYLE = 1
const CLASS = 1 << 1
const CHILDREN = 1 << 2

// 授权 |
const vnodeType = STYLE | CLASS

// 判断 &
console.log('vnodeTtype STYLE', !!(vnodeType & STYLE))
console.log('vnodeTtype CLASS', !!(vnodeType & STYLE))
console.log('vnodeTtype CHILDREN', !!(vnodeType & CHILDREN))

