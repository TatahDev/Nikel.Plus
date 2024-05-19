const nome = "Marcelo Eltz";
let nome2 = "";
let pessoadefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];

let pessoaListaVazia = [];
// exemplo de lista vazia

let pessoas = [{
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
},
{
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer"
}
];
// Lista com 2valores(objetos, pessoa) dentro)

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function AdicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoa() {
    console.log("-------Imprimir Pessoas------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoa();

//console.log(pessoas)

AdicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoa();

//console.log(pessoas);


//console.log(pessoas)


//console.log(nomes, nomes[0])

//imprimirPessoa(pessoadefault);

//imprimirPessoa({    
    //nome: "Maria Silva",
    //idade: "25",
    //trabalho: "UX/UI Designer"})




//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();
    
