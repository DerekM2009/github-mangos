console.log("Try programiz.pro");
let food1 = "Pizza";
let food2 = "Burger";
let food3 = "Sushi";


let firstChar = food1[0];  // Access the first character of 'Pizza'
let lastChar = food2[food2.length - 1];  // Access the last character of 'Burger'
let middleChar = food3[Math.floor(food3.length / 2)];  // Access the middle character of 'Sushi'


let combinedFood = food1 + " and " + food2 + " and " + food3;


let userFood = prompt("What is your favorite food?");


let foodPoem = "Your favorite food is " + userFood + ". It's delicious and always makes you smile!";


let firstCharUserFood = userFood[0];
let middleCharUserFood = userFood[Math.floor(userFood.length / 2)];
let lastCharUserFood = userFood[userFood.length - 1];


alert("Food Poem: \n" + foodPoem + "\n\nFirst character: " + firstCharUserFood + "\nMiddle character: " + middleCharUserFood + "\nLast character: " + lastCharUserFood + "\n\nHere's a fun fact: The combination of " + combinedFood + " will never let you go hungry!");
