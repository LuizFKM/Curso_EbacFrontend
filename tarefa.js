const alunos = [
    {nome: "Ana", nota: 8},
    {nome: "Flávia", nota: 10},
    {nome: "Luiz", nota: 5},
    {nome: "Gustavo", nota: 7},
    {nome: "Marcos", nota: 3},
    {nome: "Rodrigo", nota: 9},
    {nome: "Diego", nota: 1},
]

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6) // forma mais enxuta
alunosAprovados.forEach((aluno) => {
    console.log(`APROVADO: ${aluno.nome}, nota: ${aluno.nota}\n ${"-".repeat(30)}`);
})


//forma mais extensa com alunos reprovados

function alunosComNotaMenorQueSeis(alunos){
    return alunos.nota < 6
}
const alunosReprovados = alunos.filter(alunosComNotaMenorQueSeis)
alunosReprovados.forEach((aluno) => {
    console.log(`REPROVADO: ${aluno.nome}, nota: ${aluno.nota}\n ${"-".repeat(30)}`);
})

