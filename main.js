let numbers =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let flippedCard =0;
let Card1= null;
let Card2= null;
let firstResult= null;
let secondResult= null;
let movements= 0;
let successes= 0;
let temporizer= false;
let timer=35;
let timerInicial=35;
let timeBack= null;


// para imprimir en el tablero 
let showmovements= document.getElementById(`movements`);
let summarySuccesses= document.getElementById(`successes`);
let showTimer= document.getElementById(`restTimer`);

//generacion de los numeros random
numbers= numbers.sort(()=>{return Math.random()-0.5});
 function countTime() {
  timeBack=setInterval(()=>{
  timer--;
  showTimer.innerHTML= `time: ${timer} seconds`;
  if (timer==0) {
    clearInterval(timeBack);
    blockCards();    
  }
  },1000);
 }
function blockCards(){
  for(let i =0; i <= 15;i++){
    let blockCard = document.getElementById(i);
    blockCard.innerHTML=` <img src="./images/${numbers[i]}.png" alt="">`;;
    blockCard.disabled=true;


  }

}

function FlipCard(id){

  if (temporizer==false) {
    countTime();
    temporizer= true;
  }
flippedCard++;

if (flippedCard == 1) {

  //mostrar el primer numero
Card1= document.getElementById(id);
firstResult= numbers[id]
Card1.innerHTML = ` <img src="./images/${firstResult}.png" alt="">`;
//desabilitar el primer boton 
Card1.disabled= true;

}else if (flippedCard==2) {
  Card2= document.getElementById(id);
  secondResult=numbers[id];
  Card2.innerHTML= ` <img src="./images/${secondResult}.png" alt="">`;;

 //deshabilitar segundo boton
  Card2.disabled=true;

  movements++;
  showmovements.innerHTML=`movements: ${movements}`;
  if (firstResult==secondResult) {
    flippedCard=0;
    //aumentar aciertos
    successes++;
    summarySuccesses.innerHTML=`successes: ${successes}`;
    //este if es solo para cuando termina eljuego muestre los emojis 
    if (successes ==8) {
      summarySuccesses.innerHTML = `successes: ${successes}🌈✨🤠` 
      showTimer.innerHTML=`Awesome it only took you: ${timerInicial- timer} seconds 😮👌`
      showmovements.innerHTML = `movements: ${movements} 🦖✨` 
      clearInterval(timeBack);

    }
  }else{
    //volver a tapar cards
    setTimeout(()=>{
    Card1.innerHTML= ` `;
    Card2.innerHTML= ` `;
    Card1.disabled= false;
    Card2.disabled= false;
    flippedCard = 0;
    },600);
  }

} 


}