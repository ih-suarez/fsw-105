/*
 * * Replacing Var with Let and Const 
 */

let name = 'John';
let age = 101;

function runForLoop(pets){
    const petObjects = [];
    for(var i = 0; i < pets.length; i++){
        let pet = { type: pets[i] }
        name;
        if(pets[i] === 'cat') {
            name = 'fluffy'
        } else {
            name = 'spot'
        }
        console.log('pet name: ', name)
        pet.name = name
        petObjects.push(pet)
    }
    return petObjects
}

console.log('mans name: ', name)
runForLoop(['cat', 'dog'])

    /*
    * * Re-writing .map() With Arrow Functions 
    */

    let carrots = ['bright orange', 'ripe', 'rotten']

    const mapOfVegetables = carrots.map((carrot) => {
        return { type: 'carrot', name: carrot }
    })
    console.log(mapOfVegetables);

        /*
        * * Re-write .filter() Using An Arrow Function 
        */
        const people = [
            {
                name: 'Princess Peach',
                friendly: false
            },
            {
                name:'Luigi',
                friendly: true
            },
            {
                name:'Mario',
                friendly: true
            },
            {
                name:'Bowser',
                friendly: false
            }
        ];

        const filterForFriendlies = people.filter(friend => {
            return friend.friendly
        })
        console.log(filterForFriendlies)

            /*
             * * Re-write Function To An Arrow Function 
             */
            const addition = (a, b) => a + b
                console.log(addition(2, 4));

            const multiplication = (a, b) => a * b
                console.log(multiplication(20, 5));

                /*
                * * Write a printString Function That Takes Name, Last Name And Age And Returns A Sting
                */
                const printString = (firstName, lastName, age) => {
                    return (`Hey, ${firstName} ${lastName} how does it feel to be ${age}?`)
                }
                console.log(printString('Ismael', 'Suarez', 77));
                
                    /*
                    * * Using Template Literals to Build 
                    */

                    const nameAndString = (firstName = 'Jane', lastName = 'Doe', age = 100) => {
                        return (`Hey, ${firstName} ${lastName} how does it feel to be ${age}?`)
                    }
                    console.log(nameAndString('Ismael', 'Suarez', 77));

                        /*
                        * * Use Short Hand Syntax To Make The Filter Take Up One Line   
                        */
                        
                        const animals = [
                            {
                                type: 'dog',
                                name: 'theodore'
                            },
                            {
                                type: 'cat',
                                name: 'whiskers'
                            },
                            {
                            type: 'pig',
                            name: 'piglette'
                            },
                            {
                            type: 'dog',
                            name:'sparky'
                            }
                            ];
                    
                            const filterForDog = animals.filter(animal => animal.type === 'dog')
                            console.log(filterForDog)

                            /*
                            * * Write A Function That Takes  Location and Name Parameters and Outputs A String
                            */

                            const returnNameAndLocation = (visitorsName = 'Jane' , vacationLocation = 'Puerto Rico') =>{
                            return `Hello ${visitorsName}! 
                        
Welcome to ${vacationLocation}!
                            
I hope you enjoy your stay. Please ask any of our staff in ${vacationLocation} if you need anything.`
                            }
                            console.log(returnNameAndLocation('Ashley', 'Costa Rica'));
                        
