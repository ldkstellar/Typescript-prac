"use strict";
function returnAny(message) {
    console.log(message);
}
//어떤 것이든 할 수있다.
// any는 계속해서 개체를 통해 전파된다.
const any1 = returnAny('리턴은 아무거나');
any1.toString();
let looslyTyped = {};
const d = looslyTyped.a.b.c.d; // 안정성을 잃는 이유가 있다. 동적 데이터가 들어 올 수 있다. 
function leackingAny(obj) {
    const a = obj.num; // 넘버로 누수를 만든다.
    const b = a + 1;
    return b;
}
const c = leackingAny({ num: 0 });
// c.indexOf("0");
