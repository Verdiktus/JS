// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a,b) {
//     if (a > b) {
//         return a;}
//         else return b;
// }


function pow(x, n) {
    // let result = x;

    // for( let i = 1; i < n; i ++) {
    //     result *= x;
    // }4
    return x ** n;
}


let x = +prompt('Введите число которое будет возведено в степень');
let n = +prompt('Введите степень');

if (n < 1) {
    alert(`Сепень ${n} не поддерживается`);
} else {
alert(pow(x,n));
}
