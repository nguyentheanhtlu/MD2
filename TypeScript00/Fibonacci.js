function fibonacci() {
    var number = 50;
    var sum = 0;
    var a = 1;
    var b = 1;
    for (var i = 1; i <= number; i++) {
        console.log(a);
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}
console.log(fibonacci());
