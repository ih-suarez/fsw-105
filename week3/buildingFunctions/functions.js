// Adding Any Two Numbers


function sum(num1, num2){
        return num1 + num2
};
var result = sum(50, 238)
console.log(result)



// Which is Greater Of the Array


var arrayOfNumbers = [872037, 10, 82037];

var largest = arrayOfNumbers.reduce(function(x,y) {
    return (x > y) ? x : y;
});

console.log(largest + ' ' + 'Is the largest of the numbers');


// Is the Number Even or Odd ?


function evenOrOdd(e){
    return e % 2 === 0 ? console.log(e + ' ' + 'Even') : console.log(e + ' ' + 'Odd');
};

var isItEvenOrOdd = evenOrOdd(1);


// Which String Is Longer



// function myFunction(data){
//     console.log(data);
// }

//strings
stringLength('Long long ago, there was a great war in the universe.');
stringLength('Short story for you.')


// Function to find srting length


function stringLength(string){
    if(string.length <= 20){
        console.log(string.concat(string + string));
    } else if(string.length > 20){
        console.log(string.slice(0, string.length / 2))
    } else {
        console.log('What Did You Do');
    }
};


// Fibonacci Numbers and Sums

function fibonacci(num, memo) {
    memo = memo || {};
        if (memo[num]) return memo[num];
        if (num <= 1) return 1;
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}


console.log(fibonacci(11));


// Getting Most Frequent Letter in a String

//practice
function count(words,char) {
    var re = new RegExp(char,"gi");
    return words.match(re).length;
}
   
var str = 'Ever wonder how long we have left on this planet?';
   console.log(count(str,'e'));


   // Most Frequent Letter
    

var counter = {};
var string = "Ever wonder what it means to be alive? And are we taking it for granted?";
var stringArray = string.split('');
    stringArray.forEach(function(character){
        if(!counter.hasOwnProperty(character)){
        counter[character] = 0;
        }
        counter[character]++;
   });

   console.log(counter);
   