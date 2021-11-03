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

const calcAge = function(birthYear) { 
    return 2037 - birthYear;
}

const yearsToRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement <= 0) { 
        return -1;
        console.log(`${firstName} has already retired`);
    } 
    
    else {     
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
}

console.log(yearsToRetirement(1991, 'Sheroze'));
console.log(yearsToRetirement(19, 'Mike'));


