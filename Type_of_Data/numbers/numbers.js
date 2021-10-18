console.log(6.35.toFixed(20));
console.log(((6.35*100)/100).toFixed(2));
// Функция бесконечно запрашивает данные пока не введут число или пустую строку или отмену и выводит в консоль
function readNumber(){
    let num;
    do{
        num = prompt('Введите число');

    } while (!isFinite(num))

    if(num === 'null' || num === '') return null;

    return +num;
}
console.log(`Число: ${readNumber()}`);

//наглядно как JS видит дроби(
let i = 0;

// while (i != 10) {
//   i += 0.2
//   i.toFixed(1);
//   console.log(i);

// }