
function fibonacci():number{
    const number :number =50;
    let sum =0;
    let a = 1;
    let b = 1;
    for (let i =1;i<=number;i++){
        console.log(a)
        sum=a+b;
        a=b;
        b=sum;
    }
    return a
}
console.log(fibonacci())

