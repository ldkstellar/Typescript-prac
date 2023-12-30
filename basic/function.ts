const func:(a:boolean)=>void = (n)=>{//이런형태로 사용하면 type변수의 파라미터로 자동완성이 된다
return 1;
}

func(true)


function nam():void {
    return;
}



//즉, : void 구문은 반드시 return 값이 존재하면 안되고, () => void 구문은 return이 존재해도 된다. class 에서도 마찬가지 규칙이 적용된다.



