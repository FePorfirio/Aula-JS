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



function selecionarPorClasse(){

    const elementos = document.getElementsByClassName('genero-acao')
    console.log(elementos.length)

    for(let i = 0; i < elementos.length; i++)
        console.log(elementos[i].textContent.trim())
    elementos[i].classList.add("elemento-selecionado")
}

function selecionarPorQuery(){


       const elemento = document.querySelector('.filme-mini')
       console.log(elemento)
      elementos.classList.add("elemento-selecionado")
}

function mudarTexto(){

//selecionar o elemeto que queremos mudar
const titulo = document.getElementById('titulo-destaque')

titulo.textContent = document.getElementById('imput-busca').value

console.log('Novo Teste', titulo.textContent)

}

function adicionarBadge(){

    const badge = document.createElement('span')
    badge.className ='bridge'
    badge.textContent= '⭐ Em Alta'

    //Procura um elemento do HTML pelo ID
    const container = document.getElementById('badge-container')

    //Remove tudo que estiver dentro do container
    container.innerHTML = ''

    //Adciciona umm elemento FILHO dentro de outro elemento. 
    //(nao altera o texto do elemento originario do HTML, mas acrescenta a funçao via Java Script)
    container.appendChild(badge)
}

let posterAnterior = null;

function mudarPoster(){

        const poster = document.getElementById('poster-destaque')
        const titulo = document.getElementById('titulo-destaque')

        const opcoes = [
        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        }
        ];

        let sorteado;

        // Sorteia novamente se for igual ao pôster anterior
        do {
            sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
        } while (sorteado.url === posterAnterior);

        // Guarda o pôster atual para o próximo sorteio
        posterAnterior = sorteado.url;

        poster.src = sorteado.url
        poster.alt = sorteado.nome
        titulo.textContent = sorteado.nome

        console.log("Poster trocado para: ", sorteado.nome)

        poster.style.opacity ='0'
        poster.style.transition = 'opacity 0.3s';

        // () => função anônima

        setTimeout(() =>{
            // todo esse bloco de código será executado após 300ms
            poster.style.opacity = '1';
            poster.classList.add('poster-face-in')

            // remove uma classe após 600ms
            setTimeout(() => poster.classList.remove('poster-fade-in'), 600)

        }, 300) // 300ms
}


// function mudarPoster(){

//         const poster = document.getElementById('poster-destaque')
//         const titulo = document.getElementById('titulo-destaque')

//         const opcoes = [
//         {
//             url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
//             nome: 'The Last of Us'
//         },
//         {
//             url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
//             nome: 'Wednesday'
//         },
//         {
//             url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
//             nome: 'Breaking Bad'
//         },
//         {
//             url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
//             nome: 'Round 6'
//         },
//         {
//             url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
//             nome: 'Stranger Things'
//         }
//  ];

//         const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

//         poster.src = sorteado.url
//         poster.alt = sorteado.nome
//         titulo.textContent = sorteado.nome
//         console.log("Poster trocado para: ", sorteado.me)

//         poster.style.opacity ='0'
//         poster.style.transition = 'opacity 0.3s';

//         // () => funcao anonima


//         setTimeout( () =>{
//             //todo esse bloco de codigo sera executado apos 300ms
//             poster.style.opacity = '1';
//             poster.classList.add('poster-face-in')

//             //remove uma classe apos 600ms
//             setTimeout(()=> poster.classList.remove('poster-fade-in'), 600)

//         },300  //300ms
//     )
// }

function letImput(){
    const input = document.getElementById('input-busca').value.trim()

    if(input ===''){
        alert("⚠️ Digite algo no campo! ")
        return; //para o processo da funcao.
    }

    const titulo = document.getElementById('titulo-destaque')

    titulo.textContent = input
    titulo.classList.add('texto-animado')
}