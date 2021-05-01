const winners = [
    {
    nome: 'Equipe Maravilinda',
    pais: 'Canada',
},
{
    nome: 'Liga da Justica',
    pais: 'EUA',
},
{
    nome:'Mega Group',
    pais: 'Brasil',
},
];

const vencedores = winners.map((equipe) => {
    return equipe.nome;
});

const paises = winners.map(function (local) {
    return local.pais
})
console.log(paises);