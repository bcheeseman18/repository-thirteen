/**
 * Problem #1
 *
 * Write a function that returns the subjects from a student's report card. Use the REPORTCARD
 * dataset as an input.
 */

let reportCard = [
  { subject: 'Math', grade: 89 },
  { subject: 'Improv comedy', grade: 80 },
  { subject: 'Cooking', grade: 98 },
  { subject: 'Biology', grade: 98 },
  { subject: 'Babysitting 101', grade: 100 },
  { subject: 'An Intro to Outer Space for Congresspeople', grade: 95 },
  { subject: 'History of South Africa', grade: 79 },
];
    
// function card(report) { //function that goes through the array of objects and picks out the subject
//     let subjects = []; // this creates a new array for you to store the data in 
//     for(let i = 0; i < report.length; i++) { //loop that goes through entire report
//     let subject = report[i].subject; // defines a subject as the given report item "subject"
//     subjects.push(subject);  //add each subject into the subjects array
//     }
//     return (subjects); //this is the specific bit of info that you want from the array (the answer)
// }
// console.log(card(reportCard)); // prints out the card function for the report card array

function subjects(card) {
    return card.subject; 
}
console.log(reportCard.map(subjects)); 
    


/**
 * Problem #2
 * 
 * Write a function that applies a sales tax of 10% to the prices of all items in the array. The function
 * should return an array of items (not only their prices).
 *
 * Use the ITEMS dataset as an input.
 */


items = [
  { name: 'Portugese Sand Worms', price: 9.98 },
  { name: 'Honey', price: 4.41 },
  { name: 'Banana pudding', price: 11.81 },
  { name: 'Honey', price: 4.89 },
  { name: 'Golden Grahams', price: 10.60 },
  { name: 'Granola Souffle', price: 9.19 },
  { name: 'Maine Lobster', price: 3.99 },
  { name: 'Ceviche', price: 14.90 },
  { name: 'Yeti ribs', price: 29.97 },
  { name: 'Quinoa', price: 7.19 },
];

// function addTax(groceries) {
//     let newPrice = []; 
//     for (i = 0; i < groceries.length; i++) {
//         let tax = groceries[i].price * .1; // this multiplies the price by .1
//         let total = tax + groceries[i].price; //i want to add the multiplied value to the original price
//         newPrice.push({name: groceries[i].name, price: total}); //this will add the groceries names to the total
//     }
//      return (newPrice); //should print out name and new total

// }
// console.log(addTax(items)); 

function addTax(prices) {
    return prices * .1; 
}

function getName(names) {
    return names.name; 
}
console.log(items.map(getName, addTax)); 


/**
 * Problem #3
 *
 * Write a function that returns an array of the same size as an input array but filled with zeroes. For 
 * example, the array [5, 9, 'hello'] would return [0, 0, 0].
 */

let values = [5, 9, 'hello']; 

// function replace(array) {
//     let newValue = []; 
//     for (i = 0; i < array.length; i++) {
//         newValue.push(0); 
//     }
//    return (newValue); 
// }
// console.log(replace(values)); 

let array = values.map(function(replace){
    return values = 0; 
}); 
console.log(array); 

// function replace(array) {
//     return .push(0); 
// }
// console.log(values.map(replace)); 

/**
 * Problem #4
 *
 * Write a function that returns an abbreviation for the provided phrase. The abbreviation should consist of
 * a capitalized version of the first letter in each word.
 */

// let string = 'content management system'; 

function abbrev(phrase) {
    let str = phrase.split(' '); 
    let newStr = []; 
    for (i = 0; i < str.length; i++) {
        newStr += str[i][0].toUpperCase(); 
    }
    return newStr; 
}
console.log(abbrev('content management system')); 

/**
 * Problem #5
 *
 * Write a function that removes all punctuation from a provided sentence (exclamation marks, periods, and 
 * commas). 
 */

function remove(phrase) {
    let str = phrase.split(''); 
    let newStr = []; 
    for (i = 0; i < str.length; i++) {
        newStr = phrase.replace (/[\.\,\?!\s]/g, " "); //
    }
    return newStr; 
}
console.log(remove('Wow! Tonight, all of the punctuation will be gone.')); 

/**
 * Problem #6
 *
 * Write a function that accepts an array of numbers and returns an array of boolean values reflecting whether
 * each number is negative (true if yes, false if no).
 */

let nums = [-1, 0, 1]; 

function boolean(array) {
    let number = []; 
    for (i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            let negative = true;
            number.push(negative); 
        }
        return number; 
    }
}
console.log(boolean(nums)); 