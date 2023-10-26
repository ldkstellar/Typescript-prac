"use strict";
let num = 42;
let dec = 1010;
const myObj = { value: 3 };
const testObj = { value: "leedongkyu" };
console.log(myObj);
console.log(testObj.value);
let Marr = [1, 2, 3];
for (let index = 0; index < Marr.length; index++) {
    console.log(Marr[index]);
}
const myPerson = {
    name: "lee",
    age: 26,
    address: "suwon"
};
const key = "age";
const studentName = myPerson[key];
myPerson["age"];
console.log(studentName);
class Test {
    constructor(para) {
        this.read = () => {
            console.log(this.value);
        };
        this.value = para;
    }
}
const grade = new Test(3);
grade.read();
