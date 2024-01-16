'use strict';
// task 1
alert("We use cookies");
let holderName = prompt("Напишите ваше имя?","");
let age = prompt("Напишите ваз возраст?","");
let isFemale = confirm("Вы девушка?","");

let user =  {
    holderName,
    age,
    isFemale,
}
console.log(user);


// task 2
function isNumber(){
    let number = prompt("Напишите число");
    number = Number(number);
    if(typeof number === 'number' && isFinite(number)){
        alert("Молодец. Вы написали число.");
        return;
    }else{
        alert("Напишите число! Пожалуйста");
        isNumber();
    }
}
isNumber();


// task 3
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number
switch(a){
    case 0:alert( 0 ); break;
    case 1:alert( 1 );; break;
    case 2 || 3:alert( '2,3' ); break;
}


// task 4
let sum=0;
for(let i = 1; i<=100; i++){
    if(i%2===0){
        sum+=i;
    }
}
console.log(sum);


// task 5
let num = 0;
while(num<3){
    alert(`number ${num++}`);
}