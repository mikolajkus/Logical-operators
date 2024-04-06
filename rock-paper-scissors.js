// 7. In this kata, your task is to implement an extended version of the famous rock-paper-scissors game.

function willRockWin(player) {
    return player === 'scissors' || player === 'lizard';
}

function willScissorsWin(player) {
    return player === 'paper' || player === 'lizard';
}

function willLizardWin(player) {
    return player === 'paper' || player === 'spock';
}

function willPaperWin(player) {
    return player === 'spock' || player === 'rock';
}

function willSpockWin(player) {
    return player === 'scissors' || player === 'rock';
}

function extendedVersionOfRockPaperScissors(playerOne, playerTwo){
    const rockWin = willRockWin(playerTwo);
    const scissorsWin = willScissorsWin(playerTwo);
    const lizardWin = willLizardWin(playerTwo);
    const paperWin = willPaperWin(playerTwo);
    const spockWin = willSpockWin(playerTwo);
    if (playerOne === playerTwo) {
        return 'Draw!';
    }
    if (
        (playerOne && rockWin) ||
        (playerOne && scissorsWin) ||
        (playerOne && lizardWin) ||
        (playerOne && paperWin) ||
        (playerOne && spockWin)
    ) {
        return 'Player 1 Won!';
    }
    return 'Player 2 Won!';
}

console.log(extendedVersionOfRockPaperScissors('rock', 'paper'));