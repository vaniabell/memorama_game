let numbers =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let flippedCard =0;
let Card1= null;
let Card2= null;


numbers= numbers.sort(()=>{return Math.random()-0.5})
console.log(numbers)

function FlipCard(id){
flippedCard++;
console.log(flippedCard)


if (flippedCard == 1) {
  //mostrar el primer numero
Card1= document.getElementById(id);
firstResult= numbers[id]
Card1.innerHTML = numbers[id];
} else {
    
}
}