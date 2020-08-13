// Loop Practice


// People


var movieCustomers = [
    {
        name: 'Mike',
        age: 12,
        gender: 'Male'
    },{
        name: 'Madeline',
        age: 80,
        gender: 'Female'
    },{
        name: 'Cheryl',
        age: 22,
        gender: 'Female'
    },{
        name: 'Sam',
        age: 30,
        gender: 'Male'
    },{
        name: 'Suzy',
        age: 4,
        gender: 'Female'
        }
]


// Loop for Age


for(var i = 0; i < movieCustomers.length; i++){
    movieCustomers[i].age >= 18 ? console.log('They are old enough') : console.log('They are not old enough');
};


// Personalized message


for(var i = 0; i < movieCustomers.length; i++){
    movieCustomers[i].age >= 18 ? console.log(movieCustomers[i].name + ' ' + 'is old enough to watch Joker.') : console.log(movieCustomers[i].name + ' ' + 'is not old enough to watch Joker.');
};


// Gender and age check


for(var i =0; i < 5; i++){
    if (movieCustomers[i].age >= 18 && movieCustomers[i].gender === 'Male'){
        console.log(movieCustomers[i].name + ' ' + 'is old enough, let him in');
    } else if (movieCustomers[i].age <= 18 && movieCustomers[i].gender === 'Male'){
        console.log(movieCustomers[i].name + ' ' + 'is not old enough, do not let him in');
    } else if(movieCustomers[i].age >= 18 && movieCustomers[i].gender === 'Female'){
        console.log(movieCustomers[i].name + ' ' + 'is old enough, let her in'); 
    } else if (movieCustomers[i].age <= 18 && movieCustomers[i].gender === 'Female'){
        console.log(movieCustomers[i].name + ' ' + 'is not old enough, do not ler her in');
    } else {
        console.log('No one gets in');
    }
};
        

// Looping through 101!!!!!

for(var i = 0; i < 101; i++){
    i % 2 === 1 ? console.log(i + ' ' + 'Odd') : console.log(i + ' ' + 'Even');
};

// Extra Credit


// I would appreciate a hint for figuring out how to find if lights are 'on'/'off' 
// while using nested arrays.

// var numbers = [
//         [2, 5, 435, 4, 3],
//         [1, 1, 1, 1, 3],
//         [9, 3, 4, 2]
//     ]

var numberArray = [2, 5, 435, 4, 3]

var sum = numberArray.reduce(function(a,b){
    return a + b;
}, 0);

sum % 2 === 1 ? console.log('The lights are off') : console.log('The lights are on');

