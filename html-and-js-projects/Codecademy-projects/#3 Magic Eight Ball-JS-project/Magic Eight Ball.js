var userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

const userQuestion = 'Will the weather be nice today?';
console.log(userQuestion);

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = 7;

switch (eightBall) {
  case 1:
  console.log('It is certain');
  break;
  case 2:
  console.log('It is decidedly');
  break;
  case 3:
  console.log('Really hazy try again');
  break;
  case 4:
  console.log('Cannot predict now');
  break;
  case 5:
  console.log('Do not count on it');
  break;
  case 6:
  console.log('My sources say no');
  break;
  case 7:
  console.log('Outlook not so good');
  break;
  case 8:
  console.log('Signs point to yes');
  break;
}

console.log(eightBall);