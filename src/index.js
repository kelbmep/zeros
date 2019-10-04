module.exports = function zeros(expression) {
  let res = 0;
  let twos = 0;
  let fives = 0;
  let symbol = expression[0];
  let number = '';
  let index = 0;
  let factorial = 0;
  while (index <= expression.length){
    while (!isNaN(symbol)) {
      number += symbol;
      symbol = expression[++index];
    }
    factorial = parseInt(number);
    if(factorial % 2 == 1)
    {
      if(!isNaN(expression[index+2]) || index + 2 > expression.length)
      {
        twos += Math.floor(factorial / 2);
        fives += Math.floor(factorial / 5);
        fives += Math.floor(factorial / 25);
      }
      else 
      {
        fives += Math.round(factorial / 10);
        fives += Math.floor(factorial / 25);
        fives -= Math.floor(factorial / 50);  
        index++;
      }
    }
    else
    {
      if(!isNaN(expression[index+2]) || index + 2 > expression.length)
      {
        twos += Math.floor(factorial / 2);
        fives += Math.floor(factorial / 5);
        fives += Math.floor(factorial / 25);
      }
      else
      {
        twos += Math.floor(factorial / 2);
        fives += Math.floor(factorial / 10);
        fives += Math.floor(factorial / 50);
        index++;
      }
    }
    index += 2;
    symbol = expression[index];
    number = '';
  }
  res = Math.min(twos, fives);
  return res;
}