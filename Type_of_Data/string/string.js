// let str = 'Ослик Иа-Иа посмотрел на виадук';
// let target = 'Иа';

// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     console.log(`Найдено тут: ${foundPos}`);
//     pos = foundPos + 1;
// }

// console.log(str);
// console.log(str.toUpperCase().indexOf('ЕЛ'));



// function ucFirst(a) {
//     if(!a) return a;
//     return a[0].toUpperCase() + a.slice(1);
// }

// console.log(ucFirst('вася'));


// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));


// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20)); 


function exctractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(exctractCurrencyValue('$1000'));