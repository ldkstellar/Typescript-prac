type Mytype = 3;// type에 값을 할당해서 특정 값만 타입을 지정 할 수 있다. 
type Mynum = number; //type 값에 type을 할당 할 수 도 있다.

let num:Mynum = 42;
let dec:number = 1010;


// 제네릭을 사용하여 타입을 변수에 저장하는 예
type Container<T> = {value:T};

const myObj: Container<number> = {value:3};
const testObj:Container<string> = {value:"leedongkyu"};
console.log(myObj);
console.log(testObj.value);

type T= number[];
//type MyArr<T> =[] ;


type I  = number;

type Fixd<T> = [T , T ,T];

let Marr :Fixd<number> = [1,2,3];
for (let index = 0; index < Marr.length; index++) {
    console.log(Marr[index]);
    
    
}

//  타입스크립트에서 key of란 무엇인가? keyof를 사용하면 객체의 속성이름을 타입으로 추출이 가능하다.

type Person = {
    name:string;
    age:number;
    address:string
}

type PersonKey  = keyof Person;

const myPerson:Person = {
    name:"lee",
    age:26,
    address:"suwon"
}

const key:PersonKey = "age"
const studentName = myPerson[key];
console.log(myPerson["age"]);
console.log(studentName);




class Test<T>{
    private value:T;
    constructor(para:T){
        this.value = para;
    }
    read = ():void=>{
        console.log(this.value);
        
    }
}

const grade = new Test<number>(3);
grade.read();




