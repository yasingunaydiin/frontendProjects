//The forecast today is 293 Kelvin.
const kelvin = '293';

//Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;

//Explanation of this line of code.
let fahrenheit = celsius * (9 / 5) + 32;

//Practice: In newton.
let newton = celsius * (33 / 100);
newton = Math.floor(newton);

//Converting Celsius to Fahrenheit, you get a decimal num.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${newton} degrees Fahrenheit.`);