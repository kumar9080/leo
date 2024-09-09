var reviews = [5, 4.1, 4, 3, 5, 3.2];
for (var i = 0; i <= reviews.length - 1; i++) {
    console.log(reviews[i]);
}
//Calculate Average 
var total = 0;
for (var i = 0; i <= reviews.length - 1; i++) {
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Average = " + average);
var sports = ['Cricket', 'Golf', 'FootBall', 'Kabadi', 'Running-Race'];
for (var i = 0; i <= sports.length - 1; i++) {
    console.log(sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var array = sports_1[_i];
    if (array == 'FootBall') {
        console.log(array);
    }
    else {
        console.log("False");
    }
}
