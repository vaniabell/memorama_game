let numbers =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let flippedCard =0;
let Card1= null;
let Card2= null;
let firstResult= null;
let secondResult= null;
let movements= 0;
let successes= 0;
let temporizer= false;
let timer=30;
let timeBack= null;


// para imprimir en el tablero 
let showmovements= document.getElementById(`movements`);
let summarySuccesses= document.getElementById(`successes`);
let showTimer= document.getElementById(`restTimer`);

numbers= numbers.sort(()=>{return Math.random()-0.5});
 function countTime() {
  timeBack=setInterval(()=>{
  timer--;
  showTimer.innerHTML= `time: ${timer} seconds`;
  if (timer==0) {
    clearInterval(timeBack);
    blockCards();
        Swal.fire({
      title: 'GAME OVER 🥺💔',
      width: 600,
      padding: '3em',
      color: 'rgba(0,255,255)',
      background: 'rgba(255, 255, 255, 0.2)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }
  },1000);
 }
function blockCards(){
  for(let i =0; i <= 15;i++){
    let blockCard = document.getElementById(i);
    blockCard.innerHTML=numbers[i];
    blockCard.disabled=true;


  }

}

function FlipCard(id){

  if (temporizer==false) {
    countTime();
    temporizer= true;
  }
flippedCard++;
console.log(flippedCard)


if (flippedCard == 1) {

  //mostrar el primer numero
Card1= document.getElementById(id);
firstResult= numbers[id]
Card1.innerHTML = numbers[id];
//desabilitar el primer boton 
Card1.disabled= true;

}else if (flippedCard==2) {
  Card2= document.getElementById(id);
  secondResult=numbers[id];
  Card2.innerHTML=secondResult;

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
      summarySuccesses.innerHTML= `successes: ${successes}🌈✨🤠`
      showmovements.innerHTML= `movements: ${movements} 🦖✨`

    }

  
  }else{
    //volver a tapar cards
    setTimeout(()=>{
    Card1.innerHTML= ` `;
    Card2.innerHTML= ` `;
    Card1.disabled= false;
    Card2.disabled= false;
    flippedCard = 0;
    },800);
  }

} 


}