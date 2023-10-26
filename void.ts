// 리턴 타입으로 사용한다. 자바스크립트에서는 undefined라는 상태가 있다.

function returnVoid(message:string):void{
    console.log(message);
    return undefined;
}


const r = returnVoid('리턴이 없다');// 자바스크립트에서는 undefined 와 같은 얘기이다. r의 타입을 undefined을 하려는 것을 컴파일러가 막는다.
