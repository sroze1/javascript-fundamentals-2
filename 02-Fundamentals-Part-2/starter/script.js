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

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);





console.log(friends[0]);


console.log(friends.length);
console.log(friends[friends.length-1]);


friends[2] = `Jay`;
console.log(friends);

// friends= [`Bob`, `Alice`];


const firstName = `Jonas`;
const jonas = [firstName, `Sheroze`, 2037 - 1997, friends];

console.log(jonas)



// Exercise
const age1 = calcAge1(1997);

// Function declaration
function calcAge1(birthYear) { 
    return 2037 - birthYear;
}

const years= [1990, 1967, 2002, 2010, 2018];
calcAge1(years);


const age11 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);

const ages = [calcAge1(years[0]), calcAge1(years[1]), calcAge1(years[years.length - 1])];
console.log(ages);
