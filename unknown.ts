// 컴파일러가 타입을 추론 할 수 있도록 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용 할수 없다. 즉 unknown을 사용하면 any 보다 런타임 에러를 줄일 수있다.
// 사용전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 api에 사용할 수 있을 것 같다.  

declare const maybe:unknown;

// const aNumber:number = maybe;

if (maybe === true) {
     const aBoolean:boolean = maybe;
     
    //  const aString:string = maybe;// type guard
}

if (typeof maybe === 'string') {
    const aString:string  = maybe;

    // const aBoolean:boolean =maybe
    
}