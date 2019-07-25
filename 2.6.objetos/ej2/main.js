'use strict'


const adalaber2 = {
    name: 'Rocío',
    age:25,
    actress: true,
}

// Muestra en la consola 'Rocío'
console.log(adalaber2['name']);


const adalaber = {};
adalaber.name = 'Susana';
adalaber.run = phrase => ` ${phrase}`;


console.log (adalaber.run('Estoy corriendo'));