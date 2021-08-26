"use strict";
const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
    const randNum = Math.round(Math.random());
    // if (randNum === 0) {
    //     return opt1;
    // } else {
    //     return opt2;
    // }
    return (randNum === 0 ? opt1 : opt2); // ternary operator
}
console.log(chooseOption(0, 1));

function attackPlayer(health) {
    return health - randomDamage();
}
console.log(attackPlayer(10));

const logHealth = (player, health) => {
    console.log(player + " health: " + health);
}
logHealth("Trogdor", 20);

const logDeath = (winner, loser) => {
    console.log(winner + " defeated " + loser);
}
logDeath("Trogdor", "Speget");

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDead(0));

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        const attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight("Trogdor", "Speget", 100, 100)

// extended challenges:

// function printSquare(width) {

// }