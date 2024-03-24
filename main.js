// Variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const buttonTentar = document.querySelector("#button-tentar");
const buttonNovamente = document.querySelector("#button-novamente");
let numeroAleatorio = Math.round(Math.random() * 10);
let tentativas = 1;
console.log(numeroAleatorio)
/*-----------------------//----------------------------- */
// Eventos
/*
addEventListener
add = adicione, Event =  evento, Listener = ouvidor.
Adicione o evento ao cara que irá ouvir, quem irá ouvir? a função...
*/
buttonTentar.addEventListener('click', handleTryClick);
buttonNovamente.addEventListener('click', handleResetClick);
document.addEventListener('keydown', pressEnter);


/*-----------------------//----------------------------- */
/*função callback*/

/* É Quando eu passo uma função como argumento de outra função e essa função será usada depois de um tempo eu vou chamar lá de volta */
function handleTryClick(event){
  /*O padrão do button dentro do formulario é enviar o formulario, so que nesste caso
  a função preventDefault não deixa que isso ocorra, não deixa fazer o submit desse formulario*/
  event.preventDefault(); //não faça o padrão

  const inputNumber = document.querySelector("#input-number");
  

  if(Number(inputNumber.value) >=0 && Number(inputNumber.value) <=10 && Number(inputNumber.value) == numeroAleatorio) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${tentativas} tentativas`

    numeroAleatorio = Math.round(Math.random() * 10);
  } else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
     alert("insira um valor entre 0 ate 10")
     
  } else if(Number(inputNumber.value) == 0  ){
    alert("preencha com um numero valido")
  }
  console.log(Number(inputNumber.value))
      inputNumber.value = ""
      tentativas++
}

function handleResetClick() {
  toggleScreen()
  tentativas = 1
  numeroAleatorio = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(e) {
  console.log(e.key)
  if(e.key == 'Enter' && screen1.classList.contains("hide")){
    handleResetClick()
  }
}