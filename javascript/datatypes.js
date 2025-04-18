// ##############Primitive Data Type#################
// Number=>Numeric Values
// String=>Strimg Values
// BigInt->used in crypto (2**52)
// Boolean=>True/False
// null=>Standalonevalue
// undefined=>value that si not defined
// Symbol=>specific value or unique value
// ##############Non-Primitive Data Type#################
Array
Object
Function
// const myFunction=function(){
//     console.log("hi")// if we dont use return statement in function and call the function in console log then it returns undefined
// }
// console.log("hello",myFunction())// without use of console log if directlty call the function then no undefined statement is shown

//Memory in js//
// Heap (used in primitive data types copy of original value)
// Stack (used in non-primitive data types refernce of original value)
// let one="golu"
// let two=one
// two="anshu"
// console.log(one)
// console.log(two)
// let userOne={
//     email:"golu@gmail.com"
// }
// let userTwo=userOne
// userTwo.email="golubhai@gmail.com"
// console.log(userTwo)