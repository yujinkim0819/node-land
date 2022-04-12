var args = process.argv;
console.log(args[2]); // 배열 형식이 들어가있다
console.log('A');
console.log('B');
if(args[2] == '1'){
    console.log('C1');
} else { // flase
    console.log('C2');
}
console.log('D');
