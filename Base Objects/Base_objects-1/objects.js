// let user = {};
// user.name = 'John';
// console.log(user.name);
// user.surname = 'Smith';
// console.log(user.surname);
// user.name = 'Pete';
// console.log(user.name);
// delete user.name;
// console.log(user);
////////////////////////////////

// function isEmpty(obj) {
//   for (key in obj) {
//     return false; 
//   }
//   return true;
// }
///////////////////////////////
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// for(let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum)
////////////////////////////// Функция умножения всех цифровых значений объекта на 2
// function multiplyNumeric(obj) {
//   for(let key in obj){
//     if (typeof(obj[key]) == 'number'){
//       obj[key] *= 2;
//     }
//   }
// }
// let user = {
//     name: "Djohn",
//     age: 30
// };

// let key = "name";

// console.log(user[key]);


// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// for (let i in salaries) {
// sum += salaries[i]
// }
// console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

console.log(menu)
function multiplyNumeric(obj){
    for(let key in obj) {
        if(typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}
multiplyNumeric(menu)
console.log(menu)