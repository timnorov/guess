'use strict';

let isNumber = function (n) { 
  return !isNaN(parseFloat(n)) && isFinite(n);
 };
 
let n;

  function number() { 
    let x = Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        count = 10,
        result,
        again;
    function game() { 
      if (count == 0) {
        again = confirm('Попытки закончились, хотите сыграть еще?');
        if (again == true) {
          return number();
        } else {
          alert('Игра окончена');
          return;
        }
      }
      n = prompt('Угадайте число от 1 до 100');
      if (n === null){
        alert('Игра окончена');
      } else if (!isNumber(n) || n === ''){
        alert('Введите число');
        return game();
      } else if (n < x && count <= 10 && count >= 0) {
        alert('Загаданное число больше, осталось попыток: ' + (--count));
        return game();
      } else if (n > x && count <= 10 && count >= 0) {
        alert('Загаданное число меньше, осталось попыток: ' + (--count));
        return game();
      } else if (n == x){
          result = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (result == true) {
            return number();
          } else {
            alert('Игра окончена');
        }
      }
    }
    return game();
  } 
number();
