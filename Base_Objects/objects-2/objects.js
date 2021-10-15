// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   }; Если убрать точку с заяптой, будт ошибка
  
//   (user.go)()

//////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let calculator = {
//     read() {
//         this.x = +prompt('Введите x');
//         this.y = +prompt('Введите y');
//     },
//     sum() {
//         return this.x + this.y;
//     },
//     mul() {
//         return this.x * this.y;
//     }

// }
// calculator.read();

// console.log(calculator.sum() );
// console.log(calculator.mul() );

let ladder = {
    step : 0,
    up() {
      this.step++;
      return this; //возврат самого объекта в каждом методе
    },
    down() {
      this.step--;
      return this; //возврат самого объекта в каждом методе
    },
    showStep() { // показывает текущую ступеньку
        return this; //возврат самого объекта в каждом методе
      alert( this.step );
    },
};

  ladder.up().up().down().showStep();