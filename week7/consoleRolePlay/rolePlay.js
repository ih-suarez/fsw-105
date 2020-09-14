const readlineSync = require(`readline-sync`);

let enemiesThatCanTakeOnHumans = [`Thanos`, `Spawn`, `Joker`, `Darkseid`];

let theChosenEnemy = enemiesThatCanTakeOnHumans[Math.floor(Math.random() * enemiesThatCanTakeOnHumans.length)];

// class Enemy {
//     constructor(enemyName){
//         this.enemyName = enemyName
//         enemiesThatCanTakeOnHumans.push(this)
//     }
// };
// new Enemy();
// new Enemy();
// new Enemy();
// new Enemy();

let enemyAttack = Math.floor(Math.random() * 100) 


let lootBox = [`Space Gem`, `Reality Gem`, `Mind Gem`, `Time Gem`, `Soul Gem`, `Power Gem`];

// class Treasure {
//     constructor(treasure){
//         this.treasure = treasure
//         lootBox.push(this)
//     }
// };
// new Treasure();
// new Treasure();
// new Treasure();
// new Treasure();
// new Treasure();
// new Treasure();


let lootBag = [`Captain Americas Shield`, ` Mjölnir`];
let lootEnemy = lootBox[Math.floor(Math.random() * lootBox.length)]

let humanAttack = Math.floor(Math.random() * 100);

let humansHealth = 50;


const thingsTheHumanCanDo = [`walk`, `bag`, `exit`];

let humanName = readlineSync.question(`Ah... I did not see you there...How did yo- Nevermind What Is Your Name? `)
        console.log(`${humanName}... Interesting... Let me make a note of that...`)
        console.log(`You are in a Role Playing Game... Do not worry... This is not real... Yet..`)
        console.log(`You will have some Actions you can take pop up... `)
    
const letsMakeItPlayAGame = () => {
    
    let enemyHealth = 50;

    const action = readlineSync.keyInSelect(thingsTheHumanCanDo, `Alright, what would you like to do?`)        
    
    if(thingsTheHumanCanDo[action] == `exit`){
        return humansHealth = 0
    } else if(thingsTheHumanCanDo[action] == `bag`){
        console.log(`${humanName}: \n ${humansHealth} \nLoot Box: ${lootBag} `)
    } else if(thingsTheHumanCanDo[action] == `walk`){
        let key = Math.random()
        if(key <= .25){
            console.log(`Yeah ${humanName}... so... let's walk`)
        } else if(key >= .25){
            console.log(`${theChosenEnemy}... Human! You Have any last words?!`)
            
            while(enemyHealth > 0 && humansHealth > 0){
                
                const engagementAction = readlineSync.question(`${humanName}, do you want to run (r) or do you want to attack (a)? `)

                switch (engagementAction){
                    case 'r':
                        const runAway = Math.floor()
                        if(runAway < .5){
                            console.log(`Ah... Right before you got away ${enemyName} hits you for ${enemyAttack}`)
                        } else {
                            console.log(`Wow... Spectacular... You got away!`)
                        }
                        break;    
                        case 'a':
                        enemyHealth -= humanAttack
                        console.log(`Attack it is. You attack ${theChosenEnemy} worth ${humanAttack} `)

                        humansHealth -= enemyAttack
                        console.log(`${theChosenEnemy} just hit you worth ${enemyAttack} `)
                        
                        if(enemyHealth <= 0){
                            console.log(`You defeated ${theChosenEnemy} it seems he left ${lootEnemy} behind. `)
                            let loot = Math.random()
                            if (loot <= .25){
                                lootBag.push(lootEnemy)
                            }
                            } else if(humansHealth <= 0){
                                console.log(`${theChosenEnemy} has put an end to you.`)
                        }
                    }
                }
            }
        }
    }

while(humansHealth > 0){
    humanRestore = function() {
        humanActive = true
    };
    humanRestore();
    letsMakeItPlayAGame();
}