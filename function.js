function calAdd(num1,num2)
{
    return num1+num2;
}

console.log(calAdd(3,4));


for(let i=0; i<5; i++)
{
    console.log(i);
}

let x = calAdd(2,4);
console.log(x);

// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Using the function to convert temperature
  let temperatureInFahrenheit = 77;
  let temperatureInCelsius = toCelsius(temperatureInFahrenheit);
  let text = "The temperature is " + temperatureInCelsius + " Celsius";

//   function expression
const z = function(a,b){return a*b};
let y = z(4,2);
console.log("value of y is" + y);

const m = function (a, b) {return a * b};
let n = m(4, 3);

console.log("value of n is " + n);