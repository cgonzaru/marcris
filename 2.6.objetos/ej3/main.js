'use strict';

const adalaber = {
    name: 'María',
    age = 31,
    carrer = 'periodista'
};

adalaber.showBio = function (){
    return `Mi nombre es ${this.name} tengo, ${this.age} y soy ${this.carrer}`;
}
console.log (adalaber.showBio());