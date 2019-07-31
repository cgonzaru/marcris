'use strict';

function bestLostNumber() {
    const lostNumber = [4, 8, 15, 16, 23, 42];
    let arrEven = [];
    let arrM3 = [];
    for (let i = 0; i < lostNumber.length; i++) {
        if (lostNumber[i] % 3 === 0) {
            arrM3.push(lostNumber[i]);
        } else if (lostNumber[i] % 2 === 0) {
            arrEven.push(lostNumber[i]);
        }
    }
    const result = arrEven.concat(arrM3);
    console.log(result);      
  
}


bestLostNumber();
