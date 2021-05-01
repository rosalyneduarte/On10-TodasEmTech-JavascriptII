/*1º Exemplo 

const numbers = [1, 2, 3, 4, 60, 80, -2]
console.log([2])

*/

/*
2º Exemplo

const names = ['Rafaela', 'Lais', 'Samdra', 'Beatriz', 'Jaqueline']
console.log(names.length) // length = Mostra o valor da quantidade total de itens no array

*/

//3º Exemplo

const iza = {
    nome: 'Iza',
    idade: 1,
    castrado: true,
    cor: ['branco', 'preto'],
    características: ['fofinha', 'sociavel'],
};

const beyonce = {
    nome: 'Beyoncé',
    idade: 1,
    castrado: true,
    cor: ['branco', 'marrom', 'dourado', 'preto'],
    características: ['brincalhão', 'dengoso'],
};

console.log(iza.nome, beyonce.nome);

console.log(iza['características'][0], beyonce['cor']) // dot notation