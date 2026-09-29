//Logical operators

//1.Use && to check whether 10 > 5 and 20 > 15 are true.
let result1 = (10 > 5) && (20 > 15);
console.log(result1); // Output: true

//2.Use && to check whether 10 > 15 and 20 > 10 are true.
let result2 = (10 > 15) && (20 > 10);
console.log(result2); // Output: false

//3.Use || to check whether 10 > 20 or 15 > 10 is true.
let result3 = (10 > 20) || (15 > 10);
console.log(result3); // Output: true

//4.Use || to check whether 5 > 10 or 20 < 15 is true.
let result4 = (5 > 10) || (20 < 15);
console.log(result4); // Output: false

//5.Use ! to reverse the result of 10 > 5.
let result5 = !(10 > 5);
console.log(result5); // Output: false

//6.Use ! to reverse the result of 10 < 5.
let result6 = !(10 < 5);
console.log(result6); // Output: true

//7.Create two conditions using && and || and print the final result.
let condition1 = (10 > 5) && (20 < 25); // true
let condition2 = (15 < 10) || (30 > 25); // true
console.log(condition1); // Output: true
console.log(condition2); // Output: true

//8.Create three conditions using &&, ||, and ! together.
let condition3 = (10 > 5) && (20 < 25) || !(15 < 10); // true
console.log(condition3); // Output: true

//Ternary Operator

//9.Create an age variable. If age is 18 or above, print "Eligible"; otherwise print "Not Eligible".
let age = 17;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(eligibility); // Output: Not Eligible

//10.Create a marks variable. If marks are 35 or above, print "Pass"; otherwise print "Fail".
let marks = 40;
let result = (marks >= 35) ? "Pass" : "Fail";
console.log(result); // Output: Pass

//11.Create a number variable. Check whether it is greater than 10 using a ternary operator.
let number = 8;
let checkNumber = (number > 10) ? "Greater than 10" : "Not greater than 10";
console.log(checkNumber); // Output: Not greater than 10

//12.Create a number variable. Check whether it is even or odd using a ternary operator.
let num = 7;
let evenOdd = (num % 2 === 0) ? "Even" : "Odd";
console.log(evenOdd); // Output: Odd

//13.Create a salary variable. If salary is greater than 30000, print "Good Salary"; otherwise print "Low Salary".
let salary = 25000;
let salaryCheck = (salary > 30000) ? "Good Salary" : "Low Salary";
console.log(salaryCheck); // Output: Low Salary

//Concatenation & Template Strings

//14.Create three variables containing your first name, last name, and city. Join them using +.
let firstName = "John";
let lastName = "Doe";
let city = "New York";
let fullDetails = firstName + " " + lastName + " from " + city;
console.log(fullDetails); // Output: John Doe from New York

//15.Create name and age variables and print them together using concatenation.
let name = "Alice";
let age2 = 25;
let details = name + " is " + age2 + " years old.";
console.log(details); // Output: Alice is 25 years old.

//16.Create three variables: product, price, and brand. Print them as one sentence using +.
let product = "Laptop";
let price = 70000;
let brand = "Dell";
let productDetails = "The " + brand + " " + product + " costs $" + price + ".";
console.log(productDetails); // Output: The Dell Laptop costs $70000.

//17.Create variables for your name, qualification, and company. Display them using a template string.
let myName = "Emma";
let qualification = "MSc Computer Science";
let company = "Tech Solutions";
let profileDetails = `My name is ${myName}, I have a ${qualification}, and I work at ${company}.`;
console.log(profileDetails); // Output: My name is Emma, I have a MSc Computer Science, and I work at Tech Solutions.

//18.Create name, age, and city variables. Display them using a template string in one sentence.
let personName = "Michael";
let personAge = 30;
let personCity = "Los Angeles";
let personDetails = `${personName} is ${personAge} years old and lives in ${personCity}.`;
console.log(personDetails); // Output: Michael is 30 years old and lives in Los Angeles.

//Type Casting — Implicit

//19.Add a string and a number. Print the result and its typeof.
let str = "The number is: ";
let num2 = 10;
let implicitResult = str + num2;
console.log(implicitResult); // Output: The number is: 10
console.log(typeof implicitResult); // Output: string

//20.Add a number and a number. Print the result and its typeof.
let num3 = 5;
let num4 = 15;
let sumResult = num3 + num4;
console.log(sumResult); // Output: 20
console.log(typeof sumResult); // Output: number

//21.Add a number and true. Print the result and its typeof.
let num5 = 10;
let boolValue = true;
let implicitBoolResult = num5 + boolValue; 
console.log(implicitBoolResult); // Output: 11
console.log(typeof implicitBoolResult); // Output: number

//22.Add a number and null. Print the result and its typeof.
let num6 = 20;
let nullValue = null;
let implicitNullResult = num6 + nullValue; 
console.log(implicitNullResult); // Output: 20
console.log(typeof implicitNullResult); // Output: number

//23.Add a string and true. Print the result and its typeof.
let str2 = "Value is: ";
let boolValue2 = true;
let implicitStrBoolResult = str2 + boolValue2; 
console.log(implicitStrBoolResult); // Output: Value is: true
console.log(typeof implicitStrBoolResult); // Output: string

//24.Add a string and an array. Print the result and its typeof.
let str3 = "Array: ";
let arr = [1, 2, 3];
let implicitStrArrResult = str3 + arr; 
console.log(implicitStrArrResult);  // Output: Array: 1,2,3
console.log(typeof implicitStrArrResult); // Output: string 

//25.Add a number and an object. Print the result and its typeof.
let num7 = 5;
let obj = { key: "value" };
let implicitNumObjResult = num7 + obj; 
console.log(implicitNumObjResult); // Output: 5[object Object]
console.log(typeof implicitNumObjResult); // Output: string

//26.Create three different expressions using different data types and check their resulting data types.
let expression1 = 10 + " apples"; // number + string
console.log(expression1); // Output: 10 apples
console.log(typeof expression1); // Output: string

let expression2 = true + 5; // boolean + number
console.log(expression2); // Output: 6
console.log(typeof expression2); // Output: number

let expression3 = "Hello, " + "World!"; // string + string
console.log(expression3); // Output: Hello, World!
console.log(typeof expression3); // Output: string

//Type Casting — Explicit

//27.Convert "100" into a number using Number() and print the result.
let strNum = "100";
let explicitNum = Number(strNum);
console.log(explicitNum); // Output: 100

//28.Convert "25" into a number and check its data type using typeof.
let strNum2 = "25";
let explicitNum2 = Number(strNum2);
console.log(explicitNum2); // Output: 25
console.log(typeof explicitNum2); // Output: number

//29.Convert true into a number using Number().
let boolValue3 = true;
let explicitBoolNum = Number(boolValue3);
console.log(explicitBoolNum); // Output: 1

//30.Convert false into a number using Number().
let boolValue4 = false;
let explicitBoolNum2 = Number(boolValue4);
console.log(explicitBoolNum2); // Output: 0

//31.Convert an empty string into a number using Number().
let emptyStr = "";
let explicitEmptyStrNum = Number(emptyStr);
console.log(explicitEmptyStrNum); // Output: 0

//32.Convert null into a number using Number().
let nullValue2 = null;
let explicitNullNum = Number(nullValue2);
console.log(explicitNullNum); // Output: 0

//33.Convert undefined into a number using Number().
let undefinedValue = undefined;
let explicitUndefinedNum = Number(undefinedValue);
console.log(explicitUndefinedNum); // Output: NaN

//34.Convert "Hello" into a boolean using Boolean().
let strValue = "Hello";
let explicitStrBool = Boolean(strValue);
console.log(explicitStrBool); // Output: true   

//35.Convert an empty string into a boolean using Boolean().
let emptyStr2 = "";
let explicitEmptyStrBool = Boolean(emptyStr2);
console.log(explicitEmptyStrBool); // Output: false

//36.Convert 0, 1, and -1 into boolean values using Boolean().
let zeroValue = 0;
let oneValue = 1;
let negativeOneValue = -1;
console.log(Boolean(zeroValue)); // Output: false
console.log(Boolean(oneValue)); // Output: true
console.log(Boolean(negativeOneValue)); // Output: true

//37.Convert an array into a boolean using Boolean().
let arr2 = [1, 2, 3];
let explicitArrBool = Boolean(arr2);
console.log(explicitArrBool); // Output: true

//38.Convert an object into a boolean using Boolean().
let obj2 = { key: "value" };
let explicitObjBool = Boolean(obj2);
console.log(explicitObjBool); // Output: true

//Conditional Statements

//39.Create an age variable. Using if, print "Eligible" if the age is 18 or above.
let age3 = 20;
if (age3 >= 18) {
    console.log("Eligible"); // Output: Eligible
}

//40.Create an age variable. Using if...else, print whether the person is eligible to vote.
let age4 = 16;
if (age4 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote"); // Output: Not eligible to vote
}

//41.Create a marks variable and use if...else to print "Pass" or "Fail".
let marks2 = 30;
if (marks2 >= 35) {
    console.log("Pass");
} else {
    console.log("Fail"); // Output: Fail
}

//42.Create a time variable and use else if to display different messages based on the time of day.
//1–6 → "Early Morning"
//7–12 → "Morning"
//13–17 → "Afternoon"
//18–19 → "Evening"
//20–24 → "Night"
//Anything else → "Invalid Time"
let time = 14;
if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Morning");
} else if (time >= 13 && time <= 17) {
    console.log("Afternoon");
} else if (time >= 18 && time <= 19) {
    console.log("Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Time");
}   

//43.Create a temperature variable and use if...else if...else to print:
//Above 35 → "Hot"
//20–35 → "Normal"
//Below 20 → "Cold"
let temperature = 25;
if (temperature > 35) {
    console.log("Hot");
} else if (temperature >= 20 && temperature <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}

//44.Create a nested if program that checks:
//Age ≥ 18
//Height ≥ 170
//Weight ≥ 60
//Print "Eligible" only when all three conditions are satisfied.
age = 20;
let height = 175;
let weight = 65;

if (age >= 18) {
    if (height >= 170) {
        if (weight >= 60) {
            console.log("Eligible");
        }
    }
}


//Switch Statement

//45.Create a trafficLight variable with values "red", "yellow", or "green". Use switch to print the appropriate action.
let trafficLight = "yellow";
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready to go");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}

//46.Create a day variable with values "Monday" to "Sunday". Use switch to print the day.
let day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//47.Create a choice variable with values 1, 2, or 3. Use switch to print:
//1 → "Start"
//2 → "Settings"
//3 → "Exit"
let choice = 4;
switch (choice) {
    case 1:
        console.log("Start");
        break;
    case 2:
        console.log("Settings");
        break;
    case 3:
        console.log("Exit");
        break;
    default:
        console.log("Invalid choice");
}

//Loops

//48.Use a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//49.Use a while loop to print numbers from 10 to 1.
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

//50.Create an array of fruits and use:
//for...of to print every fruit.
//Create an object containing name, role, and experience, then use for...in to print every key and value.
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

let person = {
    name: "John",
    role: "Developer",
    experience: 5
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
