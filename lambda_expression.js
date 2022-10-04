    let arr = [1, 2, 3, 4, 5, 6, 7];
let square = (item) => item * item;

function arraySq(func, arr) {
    let newArr = [];
    arr.forEach((a) => {
        newArr.push(func(a));
    });
    return  newArr;
}

console.log(arraySq(square, arr));