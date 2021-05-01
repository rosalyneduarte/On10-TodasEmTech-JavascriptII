//Array.slice = Add e Tira ao mesmo tempo, podendo so tirar
const countryList = [ "Argentina","Armenia","Australia","Azerbaijan","Bahamas","Brazil","Burkina Faso", "Costa Rica","Mauritania","St Vincent","Uganda","United Arab Emirates","Uruguay","Uzbekistan","Venezuela"];

countryList.splice(2,4)
//console.log(countryList)

const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

usuarios.splice(0,1, {
    user: 255, 
    name: 'Suzana', 
    idade: 32

})

usuarios.splice(2,4)
console.log(usuarios)

