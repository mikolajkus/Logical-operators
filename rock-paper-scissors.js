// 7. In this kata, your task is to implement an extended version of the famous rock-paper-scissors game.

function willRockWin(opponent) {
    return opponent === 'scissors' || opponent === 'lizard';
}

function willScissorsWin(opponent) {
    return opponent === 'paper' || opponent === 'lizard';
}

function willLizardWin(opponent) {
    return opponent === 'paper' || opponent === 'spock';
}

function willPaperWin(opponent) {
    return opponent === 'spock' || opponent === 'rock';
}

function willSpockWin(opponent) {
    return opponent === 'scissors' || opponent === 'rock';
}

function extendedVersionOfRockPaperScissors(playerOne, playerTwo){
    if (playerOne === playerTwo) {
        return 'Draw!';
    }
    if (
        (playerOne === 'rock' && willRockWin(playerTwo)) ||
        (playerOne === 'scissors' && willScissorsWin(playerTwo)) ||
        (playerOne === 'lizard' && willLizardWin(playerTwo)) ||
        (playerOne === 'paper' && willPaperWin(playerTwo)) ||
        (playerOne === 'spock' && willSpockWin(playerTwo))
    ) {
        return 'Player 1 Won!';
    }
    return 'Player 2 Won!';
}

console.log(extendedVersionOfRockPaperScissors('rock', 'scissors'));