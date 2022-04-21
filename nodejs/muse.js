/*
var M = {
    v: 'v',
    f:function () {
        console.log(this.v);
    }
}
M.f();
*/

// 모듈을 가져오기 : require
var part = require('./mpart.js'); // 모듈을 로딩한 결과가 들어있음
console.log(part);
part.f();