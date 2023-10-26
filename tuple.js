"use strict";
let x; // 튜플은 값의 변경이 되지 않는다.
x = ["hello", 3]; // 항상 순서 타입이 길이가 맞아야 한다.
const person = ["Mark", 39];
const [first, second] = person; //구조분해의 값은 참조형태로 할당이 된다.
console.log(first, second);
