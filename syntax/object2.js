// array, Object 

var f = function() {
    console.log(1+1);
    console.log(1+2);
}
console.log(f);
f(); // 2, 3

var a = [f];
a[0](); // 2, 3

var o = {
    func:f
}
o.func(); // 2, 3

// var i = if(true){console.log(1)}; 조건문은 값으로 대입 불가

// var w = while (true) {console.log(1);} while이라는 statement는 대입 불가
