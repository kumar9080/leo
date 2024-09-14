"use strict";
let reviews = [5, 4.1, 4, 3, 5, 3.2];
for (let i = 0; i <= reviews.length - 1; i++) {
    console.log(reviews[i]);
}
//Calculate Average 
let total = 0;
for (let i = 0; i <= reviews.length - 1; i++) {
    total += reviews[i];
}
let average = total / reviews.length;
console.log("Average = " + average);
const sports = ['Cricket', 'Golf', 'FootBall', 'Kabadi', 'Running-Race'];
for (let i = 0; i <= sports.length - 1; i++) {
    console.log(sports[i]);
}
for (let array of sports) {
    if (array == 'FootBall') {
        console.log(array);
    }
    else {
        console.log("False");
    }
}
