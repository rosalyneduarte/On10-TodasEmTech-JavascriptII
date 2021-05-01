const usuarios = [
    { user: 252, nome: 'Marcia', idade:'40'},
    { user: 234, nome: 'Patricia', idade:'25'},
    { user: 250, nome: 'Fláva', idade:'32'},
    { user: 152, nome: 'Sibele', idade:'50'},
    { user: 100, nome: 'Joana', idade:'10'},
    { user: 025, nome: 'Marisa', idade:'35'},
    { user: 098, nome: 'Brenda', idade:'29'},
]

/* 1º Forma de Fazer
for(let contador = 0; contador <usuarios.length; contador++){
    if(usuarios[contador].user === 235){
        console.log(usuarios[contador].name, usuarios[contador].idade);
    }
}
*/