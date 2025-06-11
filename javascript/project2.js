const form=document.querySelector('form')
form.addEventListener('submit',function(e){
e.preventDefault()
const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=document.querySelector('#result')
if(height===''|| height<0|| isNaN(height)){
results.innerHTML = `<h2>please give a valid height  ${height}}</h2>`;
}
else if(weight===''|| weight<0|| isNaN(weight)){
results.innerHTML = `<h2>please give a valid weight ${weight}</h2>`;
}
else{
    const bmi=(weight/((height*height)/10000).toFixed(2))
    let category=''
if(bmi <18.5){
    category="Under Weight it is less than 18.6"
}
else if(bmi >= 18.5 && bmi < 24.9){
 category="Normal range it is Between 18.6 and 24.9"
}
else{
 category="Over Weight it is more than 24.9"
}
    results.innerHTML=`<span>BMI Is${bmi} and Category is ${category} </span>`
   
}


})