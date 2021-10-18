function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User('Вася');
  console.log(user);
  
  
  let konichua = new User('Конишуа');
  konichua.isAdmin = true;
  console.log(konichua);
  
  function AnyUser(name) {
    if(!new.target) {
      return new AnyUser(name);
    }
    this.name = name;
  };
  
  let vasya = AnyUser('Василий');
  console.log(vasya);
  
  function HelloUser(name) {
    this.name = name;
  
    this.Hello = function() {
      console.log('Меня зовут ' + this.name);
    }
    return this.Hello();
  }
  
  let hhuser = new HelloUser('Андрей');
  
  function Calculator() {
    let x,y;
    this.read = function() {
      this.x = +prompt('Введите число x');
      this.y = +prompt('Введите число y');
      console.log(`Число x = ${this.x}, число y = ${this.y}`);
      return this;
    }
    this.sum = function() {
      console.log('Sum= ', this.x + this.y);
      return this;
    }
  
    this.mul =function() {
      console.log('Mul= ', this.x * this.y);
      return this;
    }
  }
  
  const calculator = new Calculator;
  //calculator.read().sum().mul();
  
  function Accumulator(startingValue) {
      this.value = startingValue;  
      
      this.read = function() {
      this.a = +prompt('Введите число для суммирования', 0);
      this.value += this.a;
      return this;
    }
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read().read().read();
  console.log(accumulator.value);