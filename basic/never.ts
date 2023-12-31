// never 타입은 모든 타입의 subtype이며 , 모든 타입에 할당 할 수 있다.
// never에는 그 어떤 것도 할당 할수 없다. any 조차도 할당 할 수 없다.
function error(message:string):never{
    throw new Error(message);// 밑으로 내려가지 않는다.
}

function fail(){
    return error("failed");// 리턴 할때 never라고 추론이 가능하다.
}

function infinteLoop():never{
    while(true){

    }
}

declare let a:string |number;
a = 1;
if (typeof a !== 'string') {
   a; // type of guard
}



type Indexable<T> = T extends string ? T & {[index: string]:any} : never;// 제네릭

type ObjectIndexable = Indexable<{}>;
// const b:Indexable<{}> = "";// 잘못된 형식을 넣는 것을 방지를 한다.