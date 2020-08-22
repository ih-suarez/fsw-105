 // Capitalizing a string and conct a string in 'all caps' followed by the same string in lower case
 
 function capitalizeToLowerCase(str){
    var  capsToLower = str.toUpperCase() + str.toLowerCase();
        return 'The Result is ' + capsToLower;
};

console.log(capitalizeToLowerCase('Hello World'));


// Function returning half the length, and rounded down


function middleOfTheIndex(m){
    var findingTheMiddle = Math.floor(m.length / 2);
        return 'Rounded Down You Would Get: ' + findingTheMiddle;
};

console.log(middleOfTheIndex('How Vast Is The Universe'));
console.log(middleOfTheIndex('Hello World'));


// Returning First Half Of The String


function sliceFirstHalf(h){
    var returningHalf = h.slice(0, h.length / 2);
        return 'The First Half Is: ' + returningHalf;
};

console.log(sliceFirstHalf('Hello'));
console.log(sliceFirstHalf('The Universe Is Vast'));


// Capitalized And Lower Case 


function halfAndHalf(t){
    var findHalf = t.slice(0, t.length / 2);
    var findSecondHalf = t.slice(t.length / 2);
    var putItTogether = findHalf.toUpperCase() + findSecondHalf.toLowerCase();
        if (putItTogether.length % 2 != 0) {
            return findHalf.toLowerCase() + findSecondHalf.toUpperCase()
        };
    return putItTogether;
};
console.log(halfAndHalf('Hello'));
console.log(halfAndHalf('We Are But A Speck Of Dust'));


// Capitalizing Every Letter After A String


function everyFirstLetterCaps(y){
    return y.replace(/\w\S*/g, function(z){return z.charAt(0).toUpperCase() +
    z.substr(1).toLowerCase();});
}

console.log(everyFirstLetterCaps('Practice makes perfect, but nothig will ever be perfect, so keep practicing'));