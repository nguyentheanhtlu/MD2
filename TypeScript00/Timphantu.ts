let numbers : number[]= [0,1,4,6,7,8,9,10];
let i = 0;
let ar = []
while (i <=10){
 let a = numbers.indexOf(i);

 if (a == -1) {
  ar.push(i);
 }
  i++;
}
console.log(ar)



