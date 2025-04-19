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
