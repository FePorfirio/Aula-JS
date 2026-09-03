//DOCUMENT --> PÁGINA INTEIRA DO MEU HTML

// getElementByID -> procura pelo atributo id=""

//filme-principal -> ID que queremos.

// const elemento = document.getElementById('filme-principal')

// console.log(elemento)
// console.log(elemento.tagName)

// const tituloFilme =document.getElementById('titulo-filme')

function selecionarPorId(){

const tituloFilme =document.getElementById('titulo-filme')

console.log(tituloFilme)
console.log(tituloFilme.tagName) //H3
console.log(tituloFilme.textContent) //O conteudo do h3
console.log(tituloFilme.id) //titulo do filme

//adicionei uma classe no elemento (apenas no java script, no HTML permanece como estava)
tituloFilme.classList.add('elemento-selecionado')

}