'use strict';

// Strict mode forbids us to do certain things
// It creates visible errors in the console

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`i can drive`);


// const interface = "Audio";
// const private = 534;




// function logger() { 
//     console.log(`My name is Sheroze`);
// }


// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) { 

//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);


// const age1 = calcAge1(1997);

// // Function declaration
// function calcAge1(birthYear) { 
//     return 2037 - birthYear;
// }


// console.log(age1);


// // Function expression
// const calcAge2 = function (birthYear) { 
//     return 2037 - birthYear;
// }

// // const age2 = calcAge2(1997);
// // console.log(age1, age2);


// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);



// function cutFruitPieces(fruit) { 
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) { 
//     const applePieces =  cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
//     return juice;
// }


// console.log(fruitProcessor(2,3));


// const calcAge = function(birthYear) { 
//     return 2037 - birthYear;
// }

// const calcAge = function(birthYear) { 
//     return 2037 - birthYear;
// }

// const yearsToRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement <= 0) { 
//         return -1;
//         console.log(`${firstName} has already retired`);
//     } 
    
//     else {     
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }
// }

// console.log(yearsToRetirement(1991, 'Sheroze'));
// console.log(yearsToRetirement(19, 'Mike'));








// calcAverafe of 3 scores using arrow function
// 2 Use function to calculate average score of each team as parameters

// 3 Create a function 'checkWinner that takes the average score of each team as ..
// ..parameters ('avgDolphins' and 'avgKoalas') and then logs the winner to the ..
// console together with the victory points, according to the rule above. Example:
// "Koalas win (30 vs. 31")

// 4. Use the 'checkWinner' function to determine the winner for both

// TEST DATA DOLPHINS 44, 23, 71  ---- KOALAS SCORE 65, 54, 49
// DATA 2: DOLPHINS SCORE 85, 54, 41 ---- KOALAS SCORE 23, 34 AND 27


// const calcAverage =  (score1, score2, score3) =>(score1 + score2 + score3) / 3;

// const averageScoreDolph = calcAverage(85, 54, 41);
// const averageScoreKoala = calcAverage(23,34,27);

// function checkWinner(average1, average2) { 
//         if(average1 >=2* average2) { 
//                 console.log(`Dolphins win with an average of ${average1}`)
//             } else if (average2 >=2* average1) { 
//                 console.log(`Koalas win with an average of ${average2}`)
//             } else console.log(`No team wins!`)
//     }
// checkWinner(averageScoreDolph, averageScoreKoala);

// const friend1 = `Michael`;
// const friend2 = `Steven`;
// const friend3 = `Peter`;

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);





// console.log(friends[0]);


// console.log(friends.length);
// console.log(friends[friends.length-1]);


// friends[2] = `Jay`;
// console.log(friends);

// // friends= [`Bob`, `Alice`];


// const firstName = `Jonas`;
// const jonas = [firstName, `Sheroze`, 2037 - 1997, friends];

// console.log(jonas)



// // Exercise
// const age1 = calcAge1(1997);

// // Function declaration
// function calcAge1(birthYear) { 
//     return 2037 - birthYear;
// }

// const years= [1990, 1967, 2002, 2010, 2018];
// calcAge1(years);


// const age11 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[years.length - 1]);

// const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
// console.log(ages);





// ADD ELEMENTS
// const friends = ['Michael', 'Jay', 'Sheroze'];
// const newLength = friends.push('Jonas');
// // console.log(friends);

// console.log(newLength);


// friends.unshift('John');
// console.log(friends)




// // Remove elements
// friends.pop(); // removes last element .. doesn't need info to remove
// friends.pop(); //  can be done twice
// console.log(friends);



// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Jay'));





// console.log(friends.includes('Jay'));
// console.log(friends.includes('Sheroze'));



// if(friends.includes('Peter')) { 
//     console.log(`You have a friend called Peter`);
// }



// Write a function called calcTip:
// Using the same value, Tip 15% of the bill is the bill value is between 50 and 300.. 
// .. and if the value is different, then tip 20%

// calcTip function takes value as an input and returns the corresponding tip, based on the rules above
// Test the function using a bill value of 100


// Let's use arrays:
// Create an array 'bills' containing the test data below, calculated from the function created above

//BONUS: Create an array 'total' containing the total values (bill+tip);

//TEST DATA: 125, 555, 44


// function calcTip(bill) { 
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(bills);


// const total = [ (bills[0]+125),  (bills[1] + 555), (bills[2] + 44) ]  

// console.log(total);





// const jonas = { 
//     firstName: 'Jonas', 
//     lastName: 'Something',
//     age: 2037 - 1997,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);


// const interestedIn = prompt(`What do you want to know about Jonas? Choose between
// firstName, lastName, age, job, and friends`);


// if(jonas[interestedIn]) { 
//     console.log(jonas[interestedIn]);
// } else { 
//     console.log(`Wrong request, please choose between firstName, lastName, age, job and friends`);
// } console.log(jonas);

// jonas.location = 'Portgual';
// jonas['twitter'] = '@jonaslogan';
// console.log(jonas);



// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}.`);






// Object Methods
    // calcAge: function (birthYear) { 
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () { 
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () { 
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

  
// //     calcLicense: function () { 
// //         if (this.hasDriversLicense) { 
// //             console.log(`and has a driver's license`);
// //         } else console.log(`and doesn't have a driver's license`)
// //     },


//    getSummary: function() {
//         console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`)
//    }
// };


// jonas.calcAge();
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());

// console.log(jonas['calcAge'](1991));



// Challenge
// *Jonas is a 46-Years old Teacher, 
// and he has a/no driver's license".



// const John = { 
//     fullName: 'John Smith',
//     height: 1.95,
//     weight: 78,

//     calcBMI: function () { 
//         this.BMI = this.weight / (this.height*this.height);
//         return this.BMI;
//     }
// }

// const Mark = { 
//     fullName: 'Mark Miller',
//     height: 1.69,
//     weight: 60,

//     calcBMI: function () { 
//         this.BMI = this.weight / (this.height*this.height);
//         return this.BMI;
//     }
// }


// John.calcBMI();
// Mark.calcBMI();
  

// if(Mark.BMI >  John.BMI) { 
//     console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s' (${John.BMI}).`)
// } else if (John.BMI > Mark.BMI) { 
//     console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s' (${Mark.BMI}).`)
// }


// console.log('Lifting weights repetiton 1');
// console.log('Lifting weights repetiton 2');
// console.log('Lifting weights repetiton 3');
// console.log('Lifting weights repetiton 4');
// console.log('Lifting weights repetiton 5');
// console.log('Lifting weights repetiton 6');
// console.log('Lifting weights repetiton 7');
// console.log('Lifting weights repetiton 8');
// console.log('Lifting weights repetiton 9');
// console.log('Lifting weights repetiton 10');

// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) { 
//     console.log(`Lifting weights repetition ${rep}`);
// }



// const jonas = [
//     'Jonas',
//     'Scmedttman',
//     2037 - 1991,
//     'teacher',
//     29,
//     ['Michael', 'Peter', 'Steven',]
// ];


// const types = [];

// for (let i = 0; i < jonas.length; i++) { 
//     console.log(jonas[i], typeof jonas[i]);


//     // Filling types array
//     // types[i] = typeof jonasArray[i];

//     types.push(typeof jonas[i]);
// }

// const years = [1991, 2007, 1969 , 2020];
// const ages = [];

// for (let i =0; i < years.length; i++) { 
//     ages.push(2037 - years[i]);
// }



// console.log('Only String:')
// for(let i = 0; i < jonas.length; i++) { 

//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }


// console.log('Break with Number:')
// for(let i = 0; i < jonas.length; i++) { 

//     if(typeof jonas[i] !== 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }






// continue and break
// With continue we can exit the current iteration of the loop 



// const jonas = [
//     'Jonas',
//     'Scmedttman',
//     2037 - 1991,
//     'teacher',
//     29,
//     ['Michael', 'Peter', 'Steven',]
// ];

// 0,1 .... ,  4
// 4, 3.... 0

// for(let i = jonas.length - 1; i >= 0; i--) { 
//    console.log(i, jonas[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++) { 
//     console.log(`-------- Starting exercise ${exercise}`);

//     for(let rep = 1; rep <  6; rep++) { 
//         console.log(`Lifting weight repitition ${rep}`);
//     }
// }


// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');


// javaScriptIsFun = 'YES';
// console.log(typeof javaScriptIsFun);

// let year; 
// console.log(typeof year);

// year = 2021;
// console.log(typeof year);

// let and const was introduced in ES6. 
// JavaScript programs are executed from top to bottom.
// Therefore the javaScriptIsFun in this case would need to be executed before the 

// let age = 30;
// age = 31;

// var job = 'programmer';
// job = 'teacher'


// for(let rep=1; rep <= 10; rep++) { 
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) { 
//     console.log(`WHILE Lifting weights repetition ${rep}`)
//     rep++;
// }

// let dice =  Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) { 
//     console.log(`You rolled a ${dice}`);
//     dice =  Math.trunc(Math.random() * 6) + 1;
//     if(dice===6) console.log(`Loop is about to end..`);
// }


//1. Create an array for ‘bills’ containing at least 10 test values
// 2. Create an empty arrays for the tips and the totals (‘tips’ and ‘totals’)

// 3. Use calcTip function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
// Use a for loop to perform 10 calculations.

//TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52



// BONUS : 

// Write a function ‘calcAverage’ which takes an array called ‘are’ as an argument. This function calculates the average of all numbers in the given array. 

// 4.1 First, you will need to add up all values in the array. To do the addition, start by creating a variable ‘sum’ that starts at 0. Then loop over the array using a for loop. In each iteration, add current value to the ‘sum’ variable. This way, by the end of the loop, you have all values added together. 
// 4.2 To calculate the average, divide the sum you calculated before by the length of array (because that’s the  number of elements)
// 4.3 Call the function with the ‘totals’ array
