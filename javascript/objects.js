// object literal:-it is decleared using simple {} ot no new keyword or constructor are used
const symbol=Symbol("key")
const obj={
name:"golu",
[symbol]:"key1",
age:18,
email:"golu@gmail.com"

}
console.log(obj)
obj.email="golubhai@gmail.com"
Object.freeze(obj)
console.log(obj["email"])
obj.email="adsfgh@gmail.com"
console.log(obj["email"])

//singleton object:-used only once in the instance of a class
const settings = {
    theme: "dark",
    language: "en"
  };
  const obj1={1:"a",2:"b"}
  const obj2={2:"c",4:"d"}
//   const obj3=Object.assign({},obj1,obj2)
const obj4={...o}
  console.log(obj3)
  
  ///////////33333333333333333333333333333333333/////////
  let a=[1,2,3,4,5,6]
// console.log(a)
let b= new Array(1,2,3,4,4)
// console.log(b)
// console.log(b.splice(1,3))
// console.log(b)
let new_array=["golu","anshu","dheeraj"]
let new_array2=["maa","papa","aman"]
// new_array2.push(new_array)
// console.log(new_array2)
// const arr1=new_array2.concat(new_array)
// console.log(arr1)
const arr2=[...new_array,...new_array2]
console.log(arr2)
const arr3=[1,2,3,4,[4,5,6,7],7,8,[9,3,[,5,6,7]]]
console.log(arr3.flat(Infinity))
console.log(Array.from("golu"))
console.log(Array.from({name:"golu"}))
let aa=100
let bb=200
let c=300
console.log(Array.of(aa,bb,c))

