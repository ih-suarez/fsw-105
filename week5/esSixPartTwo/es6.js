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
                * * Write Function That Takes Name, Last Name And Age And Returns A Sting
                *
                * * Using Template Literals to Build helloString
                */

                const nameAndString = helloString => {
                    return (`Hey, ${firstName = 'John'} ${lastName = 'Doe'} how does it feel to be 80?`)
                }
                console.log(nameAndString());

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

                        const returnNameAndLocation = welcomeString =>{
                        return `Hello ${visitorsName = 'John'}! 
                       
Welcome to ${vacationLocation = 'United States'}.
                        
I hope you enjoy your stay. Please ask the president of ${vacationLocation = 'United States'} if you need anything.`
                        }
                       
                        
                        console.log(returnNameAndLocation());
                    
