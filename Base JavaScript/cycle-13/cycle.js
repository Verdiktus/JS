// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i)
//     }
// }

// let sum = 0;
// while (1) {
//     let value = +prompt('Введите число');
//     if (!value) break;
//     sum += value;

// }
// alert(sum);


// let a;
// do {
//     a = +prompt('Введите число больше 100 но меньше 1000')
    
      
//     } 
//     while  (a>100 && a<1000) 



let number;
number = prompt('Введите число');
point: for (let i = 2; i <= number; i++){
    for (let j = 2; j < i-1; j++ ) {
        if(i%j == 0) continue point;
        
    }
    console.log(i)
}