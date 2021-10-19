// let arr = ['Джаз', 'Блюз'];
// console.log(arr);
// arr.push('Рок-н-Ролл');
// arr[1] = 'Классика';
// console.log(arr.shift());
// arr.unshift('Рэп', 'Рэгги');
// console.log(arr);


// function sumInput() {
//     let numbers = [];
//         while(true) {
//         let value = prompt('Введите число', 0);
//         if(value === '' || value === !isFinite(value) || value === null) break;
//         numbers.push(+value);
//        }
//        let sum = 0;

//        for(let number of numbers) {
//            sum += number;
//        }
//        return sum;
//     }
//     console.log(sumInput());


function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) );