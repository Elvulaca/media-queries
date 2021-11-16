// start age verifier
// var age = document.getElementById("age").innerHTML;
// var adult = document.getElementById("adult").innerHTML;
// var result = document.getElementById("answer").innerHTML;
// var oldEnough = false;

// function checkAge() {
//     if (age.value >= 18) {
//         oldEnough = true;
//     } else {
//         oldEnough = false;
//     }
//     if (oldEnough == false) {
//         if (adult.value == "y") {
//             result = "You are not old enough, but have an adult with you.";
//         } else {
//             result = "You are not old enough and are unaccompanied."
//         }
//     } else {
//         result = "You are old enough."
//     }
// }
// end age verifier
// start fortune teller
var fortunes = [

    "You will win a <em>1000</em> dollars! Yippee!",
    "If you want to know the meaning of life, Look it up in the dictionary",
    "You will reconnect with a long lost friend.",
    "You're screwed",
    "You will pass your exams",
    "True love is a cat",
    "Smile, you never know who is falling in love with it",
];

function tellFortune() {


    var randomNumber = Math.floor(Math.random() * fortunes.length);


    console.log("random number: " + randomNumber);


    document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function reset() {


}

// end fortune teller
// function calculateDogAge(puppyAge, humanAge) {

//     var nn = puppyAge * 7;
//     var xx = humanAge * 7;
//     var output = 'Your doggie is ' + nn + ' in dog years';
//     var output2 = 'Your age is ' + xx + ' in dog years';
//     console.log(output);
//     console.log(output2);

// }


// // const donuts = ['chocolate', 'sprinkles', 'glaze', 'cookies n cream', 'strawberry', 'powdered', 'caramel']
// // for (i = 0; i < donuts.length; i++) {
// //     console.log(donuts[i]);
// // }
// // donuts.shift('chocolate');

// // donuts.pop('caramel');

// // donuts.unshift('lime zest');



// // // Array literal
// // // we assign the array to a variable
// // const colors = ['brown', 'pink', 'blue', 'teal', 'red']
// // const myAges = [10, 13, 16, 18, 21]
// // const compNums = [12 > 12, 9 === 'nine', 1 === 2, 'eight' === 'EIGHT', 5 >= 5]

// // // JS Keyword build-in Javascript methods new Array()
// // // var colors = new Array('brown', 'pink', 'blue', 'teal', 'red');
// // // var myAges = new Array(12, 13, 16, 18, 21);

// // // //JS Constructor method
// // // const colors = [];
// // // colors[0] = 'brown';
// // // colors[1] = 'pink';
// // // colors[2] = 'teal';
// // // colors[3] = 'red';
// // // colors[4] = 'blue';

// // //create an array of at least 7 of your classmates names
// // const classmates = ['April', 'Emily', 'Ana', 'Lucas', 'Luz', 'Anthony', 'Michael']

// // //Access an array
// // console.log(classmates.length);

// // //loop over an array//for loop
// // for (i = 0; i < classmates.length; i++) {
// //     console.log(classmates[i]);
// // }
// // //Array methods
// // classmates.splice(2, 1, 'Ali'); //**'push'adds an item to the end of an array
// // //'pop' removes last item from the array
// // //Unshift adds an item to te begnning
// // //shift removes an item from the top of the array

// // //find a specific index in ur array
// // console.log(classmates.indexOf(5));



// // // // // ******12 exercise Solutions***********

// // // // // //1 Write an expression that uses at least 3 different arithmetic operators.

// // // // // // // The expression should equal 42.

// // // // // // // Hint: +, -, *, /, and % are possible arithmetic operators

// // // // // // // Your Code:
// // // // var one = 7 * 6;
// // // // var two = 40 + 2;


// // // // console.log(1 + 5 - 2 + 38);


// // // // // //2 Create three variables a string with the name of your favorite food, a boolen answering if it's good for you, and a number with its calories. The first letter of the string should be capitalized.

// // // // // // // Your Code:
// // // // var favFood = "Curry Goat";
// // // // var health = false;
// // // // var calories = 1000;

// // // // // template literal ES6

// // // // console.log("My favourite food is" + favFood + "Is it healthy?" + health + "Calories" + calories);
// // // // console.log(`My favourite food is ${favFood} Is it healthy? ${health} Calories: ${calories}`);

// // // // // *// // 3 Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.

// // // // // // // Your Code:

// // // // var egFamily = ["Julia", "Michael", "April", "Ali", "Vivian"];

// // // // console.log(egFamily);
// // // // console.log(egFamily[2]);


// // // // // // // 4 Fix the right side expression so it evaluates to true.
// // // // // // // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// // // // // // // Your Code:
// // // // console.log("ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal")


// // // // // // // 5 Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// // // // // // //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// // // // // // //F = C x 1.8 + 32
// // // // // // //Log the fahrenheit variable to the console.

// // // // // // // Your Code:
// // // // var celsius = 12;
// // // // var farenheit = celsius * 1.8 + 32;

// // // // console.log(farenheit);


// // // // // // //6 Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// // // // // // // Blowing from the west
// // // // // // // Fallen leaves gather
// // // // // // // In the east.

// // // // // // // Each string should be printed on its own line.
// // // // // // // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// // // // // // // Your Code:
// // // // var haiku =
// // // //     "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east.";
// // // // console.log(haiku);

// // // // // // //7 Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// // // // // // // red blue
// // // // // // // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// // // // // // // Your Code:
// // // // var thingOne = "red";
// // // // var thingTwo = "blue";
// // // // console.log(thingOne + thingTwo);

// // // // // //  //8 Create a variable called fullName and assign it your full name as a string
// // // // // // // Create a variable called age and addign it your age.
// // // // // // // Create a varaibel called quote and assign your favorite quote as a string.
// // // // // // // Print out the results

// // // // // // // Your Code:
// // // // var fullName = "emily vulaca";
// // // // var age = "32";
// // // // var quote = "There is no such word as failure to those who say I will";

// // // // // //  //9 Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// // // // // // // Print the total to the JavaScript console.

// // // // // // // Hint: 15% in decimal form is written as 0.15_._

// // // // // // // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// // // // // // // Your Code:
// // // // var bill = 10.25 + 3.99 + 7.15;
// // // // var tip = 0.15 * bill;
// // // // var total = tip + bill;
// // // // console.log("$" + total.toFixed(2))

// // // // // // //10 Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.

// // // // // // // Your Code:

// // // // // *//  //11 Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the
// // // // // // //'small' variable lowercase and the 'big' variable capital.
// // // // // // //console.log out the results

// // // // // // // Your Code:
// // // // var small = "I am as small as a Mouse";
// // // // var big = "I am as big as an Elephant";

// // // // console.log(small.toLocaleLowerCase(0) + big.toLocaleUpperCase())

// // // // // **// //12 Create a variable called 'my time' that will display the currenttime using a ' new Date()' method
// // // // // 	Create a variable called 'message' that wil introduce the call.
// // // // // 	Concatinate the two variables together

// // // // var message = "It is currently..."
// // // // var myTime = new Date().toLocaleTimeString();

// // // // console.log(message + myTime);

// // // // function myFunction() {
// // // //     var message = "Hello World";
// // // //     document.getElementById("demo").innerHTML = message;
// // // // }

// // // // // // Write a function named tellFortune that:
// // // // // takes 4 arguments: number of children, partner's name, geographic location, job title.
// // // // // outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// // // // // Call that function 3 times with 3 different values for the arguments.

// // // function tellFortune(jobTitle, geoLocation, partner, numKids) {
// // //     var future = 'You will be a' + jobTitle + 'in a' + geoLocation + 'with' + partner + 'with' + numKids + 'kids.';
// // //     document.getElementById("demo").innerHTML = future;
// // // }

// // // tellFortune('Dancehall artist', 'Kingston', 'Dexta Daps', 3);
// // // tellFortune('Actor', 'UK', 'Idris Elba', 3000);
// // // tellFortune('Artist', 'Ghana', 'Ric Hassani', 15);


// // // // Write a function named calculateSupply that:
// // // // takes 2 arguments: age, amount per day.
// // // // calculates the amount consumed for rest of the life (based on a constant max age).
// // // // outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// // // // Call that function three times, passing in different values each time.
// // // // Bonus: Accept floating point values for amount per day, and round the result to a round number.

// // // function calculateSupply(age, amountPerDay) {
// // //     var maxAge = 100;
// // //     var totalNeeded = (amountPerDay * 365) * (maxAge - age);
// // //     var message = "You will need" + totalNeeded + "cups of coffee" + "to last you until the ripe old age" + maxAge;
// // //     console.log(message);
// // // }

// // // calculateSupply(30, 3);
// // // calculateSupply(21, 2);
// // // calculateSupply(25, 1);
// // // calculateSupply(32, 3);

// // // // // The Geometrizer
// // // // // Create 2 functions that calculate properties of a circle, using the definitions here.
// // // // // Create a function called calcCircumfrence:
// // // // // Pass the radius to the function.
// // // // // Calculate the circumference based on the radius, and output "The circumference is NN".
// // // // // Create a function called calcArea:
// // // // // Pass the radius to the function.
// // // // // Calculate the area based on the radius, and output "The area is NN".

// // // // function calcCircumfrence

// // // let str1 = "Hello ";
// // // let str2 = "today is!" + new Date();
// // // let str3 = " Have a nice day!";
// // // console.log(str1 + str2 + str3 + "Tomorrow is Hump Day" + "That is mid-week");
// // // console.log(`$ { str1 }
// // //             $ { str2 }
// // //             $ { str3 }
// // //             Tomorrow is Hump Day.That is mid - week`)

// // // function getAge() {
// // //     var mes = prompt("what is your name?");
// // //     alert(`Hello ${mes}`);
// // // }

// // // getAge();

// // // function sayHello() {
// // //     var message1 = prompt("what is your name?");
// // //     document.getElementById("demo-6").innerHTML = "Hello" + message1;
// // // }

// // // sayHello();

// // // function toCelsius(f) {
// // //     return (5 / 9) * (f - 32);
// // // }

// // // document.getElementById("demo-0").innerHTML = toCelsius(77);
// // // document.getElementById("demo-1").innerHTML = toCelsius(35);
// // // document.getElementById("demo-2").innerHTML = toCelsius(20);

// // // function calculateDeg(num) {
// // //     var degree = document.getElementById("deg").value;
// // //     var tempCalc = (5 / 9) * (degree - 32);
// // //     console.log("Your degree is" + tempCalc + "in farenheight")

// // //     document.getElementById("celDeg").innerHTML = Math.round(tempCalc);
// // // }
// // // calculateDeg();

// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');
// // // // document.write('Hello World' + '<br/>');

// // // // for (let i = 0; i < 10; i++) {
// // // //     document.write('Hello World' + '<br/>');
// // // // }

// // // // for (i = 0; i < 10; i++) {
// // // //     if (i === 7) {
// // // //         break;
// // // //     }
// // // // }
// // // // document.write("The number is" + i + < br > );

// // // // The Geometrizer
// // // // Create 2 functions that calculate properties of a circle, using the definitions here.
// // // // Create a function called calcCircumfrence:
// // // // Pass the radius to the function.
// // // // Calculate the circumference based on the radius, and output "The circumference is NN".
// // // // Create a function called calcArea:
// // // // Pass the radius to the function.
// // // // Calculate the area based on the radius, and output "The area is NN".

// // // // function calcCircumference(radius) {
// // // //     var y = (Math.PI * radius) * 2;
// // // //     console.log("The circumference is " + y + ".");
// // // // }

// // // // function calcArea(radius) {
// // // //     var x = (Math.PI * radius) * radius;
// // // //     console.log("The area is" + x + ".");
// // // // }

// // // // calcCircumference(30);
// // // // calcArea(10);

// // // // // Assignment one: Creating variables
// // // // // Variables
// // // // var name = "Emily";
// // // // var pizzaCount = 7;
// // // // var isHungry = true;
// // // // var totalCost = pizzaCount * 2.00;
// // // // // end Assignment one: Creating variables

// // // // // Assignment two: Javascript Variables
// // // // // Create Age calculator
// // // // function calculateAge(birthYear, currentYear) {
// // // //     var age = currentYear - birthYear;
// // // //     console.log('You are either ' + age + ' or ' + (age - 1));
// // // // }

// // // // calculateAge(1984, 2017);
// // // // calculateAge(1988, 2017);
// // // // calculateAge(1982, 2017);

// // // switch (new Date().getDay()) {
// // //     case 0:
// // //         day = "Sunday";
// // //         break;
// // //     case 1:
// // //         day = "Monday";
// // //         break;
// // //     case 2:
// // //         day = "free oils";
// // //         break;
// // //     case 3:
// // //         day = "2-for-1";
// // //         break;
// // //     case 4:
// // //         day = "free samples";
// // //         break;
// // //     case 5:
// // //         day = "brunch";
// // //         break;
// // //     case 6:
// // //         day = "food with a friend";
// // // }
// // // document.getElementById("message").innerHTML = (`Today is $ { day }`)
// // // console.log("Today is" + day);

// // // function special() {
// // //     if (dayNumber == 1) {
// // //         return '2-for-1';
// // //     } else if (dayNumber == 2) {
// // //         return 'free oils';
// // //     } else if (dayNumber == 3) {
// // //         return 'buy one get one';
// // //     }
// // // }