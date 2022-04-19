var q = {
    // Grouping
    v1:'v1',
    v2:'v2',
    f1:function f1() {
        console.log(this.v1); // 자신이 속해있는 객체 참조를 할 때는 this를 사용
    },
    f2:function f2() {
        console.log(this.v2);
    }
}

q.f1();
q.f2();
