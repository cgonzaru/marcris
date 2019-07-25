'use strict';

const adalaber = {
    name: 'María',
    age: 34,
    career: 'periodista'
};

adalaber.showBio = function() {
    return `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.career}`;
}

console.log(adalaber.showBio());