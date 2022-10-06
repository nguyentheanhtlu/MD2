var numbers = [0, 1, 4, 6, 7, 8, 9, 10];
var i = 0;
var ar = [];
while (i <= 10) {
    var a = numbers.indexOf(i);
    if (a == -1) {
        ar.push(i);
    }
    i++;
}
console.log(ar);
