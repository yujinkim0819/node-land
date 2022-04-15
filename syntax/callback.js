/*function a() {
    console.log('A');
}*/
// 익명함수, 함수 = 값
var a = function() {
    console.log('A');
}

function slowfunc(callback) {
    callback();
}
slowfunc(a); // 위에서 a라는 변수