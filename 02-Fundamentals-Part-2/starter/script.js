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


const age1 = calcAge1(1997);

// Function declaration
function calcAge1(birthYear) { 
    return 2037 - birthYear;
}


console.log(age1);


// Function expression
const calcAge2 = function (birthYear) { 
    return 2037 - birthYear;
}

// const age2 = calcAge2(1997);
// console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);


const yearsToRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsToRetirement(2001, `Sheroze`));