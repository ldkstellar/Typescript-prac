"use strict";
// 타입스크립트의 객체
// objecet literal
// 오브젝트 타입은 원시 타입이 아닌 것을 나타내고 싶을 때 사용하는 타입이다.
const peron1 = { name: "mark", age: 39 };
const peron2 = Object.create({ name: "lee", age: 20 });
// not primitive types string boolean bigint , symbol null undefined
// 함수선언
//declare은 compiler에게 "얘는 이미 존재하는 칭구야. 그러니까 다른 코드에서 참조될 수 있어. 그리고 Javascript로 컴파일 될 필요가 없어."라고 알려주는 keyword래.
create({ prop: 1 });
