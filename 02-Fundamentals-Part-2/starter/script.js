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



const John = { 
    fullName: 'John Smith',
    height: 1.95,
    weight: 78,

    calcBMI: function () { 
        this.BMI = this.weight / (this.height*this.height);
        return this.BMI;
    }
}

const Mark = { 
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 60,

    calcBMI: function () { 
        this.BMI = this.weight / (this.height*this.height);
        return this.BMI;
    }
}


John.calcBMI();
Mark.calcBMI();
  

if(Mark.BMI >  John.BMI) { 
    console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s' (${John.BMI}).`)
} else if (John.BMI > Mark.BMI) { 
    console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s' (${Mark.BMI}).`)
}






