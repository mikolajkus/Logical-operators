// 7. In this kata, your task is to implement an extended version of the famous rock-paper-scissors game.

function willRockWin(playerTwo) {
    return playerTwo === 'scissors' || playerTwo === 'lizard';
}

function willScissorsWin(playerTwo) {
    return playerTwo === 'paper' || playerTwo === 'lizard';
}

function willLizardWin(playerTwo) {
    return playerTwo === 'paper' || playerTwo === 'spock';

}
function willPaperWin(playerTwo) {
    return playerTwo === 'spock' || playerTwo === 'rock';
}

function willSpockWin(playerTwo) {
    return playerTwo === 'scissors' || playerTwo === 'rock';
}

function extendedVersionOfRockPaperScissors(playerOne, playerTwo){
    if (playerOne === playerTwo) {
        return 'Draw!';
    }
    if (willRockWin(playerTwo))
     {
        return 'Player 1 Won!';
    }
    return 'Player 2 Won!';
}

console.log(extendedVersionOfRockPaperScissors('rock', 'paper'));