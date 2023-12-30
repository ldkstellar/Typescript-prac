// Symbol을 함수로 사용해서 symbol 타입을 만들어 낼 수 있다.
// 원시 타입의 값을 담아서 사용한다.
// 고유하고 수정불가능한 값으로 만들어 준다.
// 주로 접근을 제어하는데 많이 사용한다.
console.log(Symbol('foo') === Symbol('foo'));
console.log(Symbol('foo'));

const sym  =  Symbol();

const obj = {[sym]: "value"};

console.log(obj[sym]);// 접근을 허락 할때 


