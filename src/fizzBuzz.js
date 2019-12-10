function FizzBuzz() {

  // First Attempt

  // FizzBuzz.prototype.play = function(number) {
  //   if (number % 3 == 0 && number % 5 == 0) { 
  //     return "FizzBuzz"
  //   } else if (number % 3 == 0) {
  //     return "Fizz"
  //   } else if (number % 5 == 0) {
  //     return "Buzz"
  //   } else {
  //     return number
  //   }
  // }  

// Refined Approach

  FizzBuzz.prototype.play = function(number) {
    if (this._isDivisibleBy(15, number)) {
      return "FizzBuzz"
    } else if (this._isDivisibleBy(5, number)) { 
      return "Buzz" 
    } else if (this._isDivisibleBy(3, number)) {
      return "Fizz"
    } else {
      return number
    }
  }

  FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
    return number % divisor === 0;
  }
}