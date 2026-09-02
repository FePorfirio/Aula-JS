
const alunos = [
{aluno:"Carina", nota:4},
{aluno:"Caio", nota:7},
{aluno:"Sérgio", nota:9},
{aluno:"Carlos", nota:10},
]

for(const escola of alunos){

    if (escola.nota <7){
        continue
    }
    console.log(escola.aluno,escola.nota)
}
//
//     const alunos = [
//     {aluno: "Carina", nota: 4},
//     {aluno: "Caio", nota: 7},
//     {aluno: "Sérgio", nota: 9},
//     {aluno: "Carlos", nota: 10},
// ]

// for (const escola of alunos) {

//     if (escola.nota < 7) {
//         continue
//     }

//     console.log(escola.aluno, escola.nota)
// }