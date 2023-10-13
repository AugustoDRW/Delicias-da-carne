

let chec = document.getElementsByClassName("checkbox");
const all = document.getElementsByClassName("checkbox-all")
let marqued = 0
let raded = 0

let opcao = document.querySelectorAll(".opcao")
let opcoes = document.querySelectorAll(".opses")
let caix = opcoes[0].children
let erroD = document.querySelector("#erroD")
let erroED = document.querySelector("#erroED")
let erroEL = document.querySelector("#erroEL")
let erroL = document.querySelector("#erroL")
let botao = document.querySelector("#botao")
let erroCont = 0;
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let telefone = document.querySelector("#telefone")
let array
let radioCont = 0
let textBox = document.querySelector("textarea")
let inicio = document.querySelector(".inicio")




function verificarBotao() {
        if(marqued > 0 && marqued < 5){
          all[0].classList.remove("checkboxMarqued");
all[0].classList.add("checkbox-half");
        }else if(marqued === 0){
          all[0].classList.remove("checkbox-half");
          
        }
    else if(marqued === 5){
      all[0].classList.remove("checkbox-half");
      all[0].classList.add("checkboxMarqued");
    }
}
  
//inicio for botão
for (let i of chec) {
  i.addEventListener("click", function() {
    if(this.classList.contains("checkboxMarqued") === true){
      this.classList.remove("checkboxMarqued");
      marqued -= 1;
    
}


    
       else if(this.classList.contains("checkboxMarqued") === false){
      this.classList.add("checkboxMarqued");
          marqued += 1 
      

        }
  

        verificarBotao()})
}
//fim for botão

//inicio do evento all

all[0].addEventListener("click", function() {
  this.classList.toggle("checkboxMarqued")
  if(all[0].classList.contains("checkboxMarqued")===true){
    for (let i of chec) {
    i.classList.add("checkboxMarqued")
      marqued = 5
  
}
  }
if(all[0].classList.contains("checkboxMarqued")===false){
    for (let i of chec) {
    i.classList.remove("checkboxMarqued")
      marqued = 0
      
  
}
  }
verificarBotao()})
//fim evento all

//raio
let radio = document.querySelectorAll(".radio");

radio.forEach(function(radioItem) {
  radioItem.addEventListener("click", function() {
    radio.forEach(function(radioItem) {
      radioItem.classList.remove("radioMarqued");
    });
    this.classList.add("radioMarqued");
    radioCont++
  });
});
//fim radio




// botoesVejaMais.forEach(botao => {
//   botao.addEventListener('click', function () {
//     const conteudoVejaMais = this.nextElementSibling;
//     conteudoVejaMais.classList.toggle('vejaMaisAberto');
//   });
// });

for(let i of botoesVejaMais){
  i.addEventListener("click", function(){
  const conteudoVejaMais = this.nextElementSibling;
    conteudoVejaMais.classList.toggle('vejaMaisAberto')
  })
}


//selecionar
function caixa(){
  opcoes[0].classList.toggle("ops")
  for(let i=0; i < caix.length;i++){
      caix[i].classList.toggle(`op${i+1}`)
    caix[i].addEventListener("click",function(){
      conteudo = caix[i].innerHTML
      opcao[0].innerHTML = conteudo
    })
  }

}
function Fcaixa(){
  opcoes[0].classList.remove("ops")
  for(let i=0; i < caix.length;i++){
      caix[i].classList.remove(`op${i+1}`)
    caix[i].addEventListener("click",function(){
      conteudo = caix[i].innerHTML
      opcao[0].innerHTML = conteudo
    })
  }

}


function cadastrar(){
  telefone = document.querySelector("#telefone").value;

   erroD.innerHTML = ""
 erroED.innerHTML =""
 erroEL.innerHTML=""
 erroL.innerHTML =""



  erroCont = 0

  //verifica nome

  if((nome.value).indexOf(" ") === -1){
   erroL.innerHTML += "<br>deve-se informar pelo menos 2 nomes"
   erroCont++
  }
  if(nome.value.length === 0 ){
    erroL.innerHTML += "<br>nome é um campo obrigatorio"
    erroCont++
   }

   //fim nome
 
   //verific email
   if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
    erroL.innerHTML += "<br>O email digitado não é válido";
    erroCont++;
} else if (!/@.*\./.test(email.value)) {
    erroL.innerHTML += "<br>O email não contém '.' depois do '@'";
    erroCont++;
}

//fim email


//verifica telefone
  array = telefone.split("");
  telefone = "";

  for (let i of array) {
    if (i !== "(" && i !== "-" && i !== ")") {
      telefone += i
    }
  }

if(Number(telefone) === NaN || telefone.length !== 11){
erroL.innerHTML += "<br> este numero não é valido"
erroCont++}

//fim telefone

//verifica radio

if(radioCont === 0){
  erroD.innerHTML += "<br> você deve informar uma preferencia"
  erroCont++
}

//verifica select

if(opcao[0].innerHTML === "selecionar"){
  erroD.innerHTML += "<br> você deve informar sua carne favorita"
  erroCont++
}

//fim select

if(textBox.value.length < 5 ){
erroED.innerHTML += "<br> a mensagem deve ter pelo menos 5 caracteres"
erroCont++
}

//verifica mensagem



if(erroCont === 0){
  inicio.innerHTML = "parabens! seu cadastro foi completo!"
}
}