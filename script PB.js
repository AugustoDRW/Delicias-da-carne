const menu = document.querySelector("#menu")
let nav = document.querySelector("nav")



const botoesVejaMais = document.querySelectorAll('.pe');
const conteudoVejaMais = document.querySelectorAll(".vejaMaisAberto")

for(let i = 0; i<botoesVejaMais.length; i++){
  botoesVejaMais[i].addEventListener("click", function(){
    conteudoVejaMais[i-1].classList.toggle('vejaMaisAberto')
  })
}

menu.addEventListener("click",function(){
nav.classList.toggle("escondido")
this.classList.toggle("marginh")

})




