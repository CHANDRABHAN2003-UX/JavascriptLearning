// function add(a,b){
// console.log(a+b)
// }
add(5,4)
function add(a,b){
    return a+b
    }
    console.log(add(5,4))
    function cart(num1,num2,...num){ //rest operator
        return num
    }
    console.log(cart(200,400,500,600))
    const username={
        name:"golu",
        price:199
    }
    function handleObject(anyobject){
console.log(`hi my name is ${anyobject.name} and prcie is ${anyobject.price}`)
    }
    handleObject({name:"golubhai",price:123})
    const array=[1,2,3,4,5,6]
    function array1(passarray){
return passarray[1]
    }
    console.log(array1(["g",8,6,5,4,4]))
    let a=500
    const b=900
    var c=89
    if(true){
        let a=50
        const b=90
        var c=899
        console.log("inner a",a)
        console.log(b)
        console.log(c)
    }
    console.log(a)
    console.log(c)