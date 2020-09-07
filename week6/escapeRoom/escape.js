const readline = require("readline-sync");

let escaped = false,
        hasKey = false,
            isPlayerAlive = true

let playerReady = readline.question('Enter Any Key To Enter The Room, The Door Will Be Locked Behind You. There will Be Options Listed When You Enter ')

while(isPlayerAlive){
    optionSelected = readline.keyInSelect(['put your hand in hole', 'look for the key', 'open the door'], 'These Are Your Options, What will You Choose To Do?');
        
switch(optionSelected){
        case 0:
            console.log('I bet the key is in here...........Your curiosity caused your demize. You are dead.')
            isPlayerAlive = false
            escaped = false
            break;
        case 1:
            if (!hasKey) {
                console.log('I have to look for this key... Oh! Ah, there it is!')
                hasKey = true
                escaped = false
            } else {
                console.log('I already have the key! Come on, get out of here!')
            }
            break;
        case 2: 
            if(hasKey){
                console.log('I have the key now. Let me get this door open. This place gives me the creeps.')
                hasKey = true
                escaped = true
            } else {
                console.log('This door is locked. There must be a key Hidden around here. I have to find the key.')
            } 
            break;
        default:
            console.log('System Failure')
    }
}
