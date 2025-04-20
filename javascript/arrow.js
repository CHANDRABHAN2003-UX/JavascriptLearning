const user={
name:"golu",
price:999,
welcomeMessage:function(){
    console.log(`${this.name} welcome to the website`)
    console.log(this)
}
}
user.welcomeMessage()
user.name="anshu"
user.welcomeMessage()
const v=user
v.name="amama"
user.welcomeMessage()
console.log(this)
// this keyword only work with object {} not with Function in node //
