// Pega um pedaço, um intervalo do Array original e depois mostra no console.log
const listagemDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

const selecaoItens = listagemDeFrutas.slice(1,4)
console.log(selecaoItens)

const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

const selecaoUsuario = usuarios.slice(1,4)
console.log(selecaoUsuario)