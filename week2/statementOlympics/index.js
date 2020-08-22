
// Preliminaries


5 > 3 ? console.log('It is greater than') : console.log('It is not greater than');

var cat = 'Cat';
var dog = 'Dog';


cat.length === 3 ? console.log('Is the length') : console.log('Is not the length');
 

'Cat' === 'Dog' ? console.log('Not the same') : console.log('Are the same');


// Bronze Medal


var personOne = {
    name: 'Bob',
    age: 35,
    hairColor: 'Brown' 
}
var personTwo = {
    name: 'Tim',
    age: 16,
    hairColor: 'Black'
}

personOne.age || personTwo.age > 18 ? console.log('They can go!') : console.log('Nope, you can not go in!');

personTwo.age >= 18 ? console.log('They can go!') : console.log('Nope, you can not go in!');

personOne.name.charAt() === 'B' ? console.log(personOne.name + ' ' + 'can go in') : console.log('You can not go in!');

personOne.age >= 18 && personOne.name.charAt(0) === 'B' ? console.log(personOne.name + ' '+ 'can go in') : console.log('You can not go in!');

personTwo.name.charAt() === 'B' ? console.log(personTwo.name + ' ' + 'can go in') : console.log('You can not go in!');

personTwo.age >= 18 && personTwo.name.charAt() === 'B' ? console.log(personTwo.name + ' ' + 'can go in') : console.log('You can not go in!');


// Silver Medal


switch(true){
    
    case 1 === '1' :
        console.log('Strict');
        break;
    case 1 == '1' :
        console.log('Loose');
        break;
    default :
        console.log('Not equal at all');
}

1 <= 2 && 2 === 4 ? console.log('Yes') : console.log('Nope');


 
// Going For Gold

// Ternary

typeof dog === 'string' ? console.log('This is a string') : console.log('Not a string');


typeof 'ture' === 'boolean' ? console.log('Yes it is a boolean') : console.log('Not a boolean');

dog ? console.log('Defined') : console.log('undefined');


'Hello World' > 1257 ? console.log('S is greater than') : console.log('S is not greater');


var myNumber = 6894

myNumber % 2 == 0 ? console.log('It is even') : console.log('It is odd');