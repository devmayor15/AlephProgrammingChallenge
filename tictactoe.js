



var game = ['', '', '', '', '', '', '', '', '']
var lastPlayed = 'null';
function tickTack(point, position){
    //Makes sure input can only be X || O
    if(point != "X" && point != 'O') return "Accepts only X and O"

    //Confirms user starts with X and placed in the center of the game
    if(game.length < 1 && (point !== 'X' || position != 4)) return "For first input, you have to start by putting X in the center";
    
    //Checks if user specified a position that doesn't exists
    if(position >= game.length) return "No available spot here";

    //checks if user tried playing in an alreadly played spot
    if(game[position].length > 0) return "A user already played in this field";

    //Checks if user tried playing twice
    if(point == lastPlayed && lastPlayed) return "You just played, wait for your turn";
    game[position] = point;
    
    //update the last played
    lastPlayed = point;

    //Checks for win or Draw
    /**
     * --|--|--
     * --|--|--
     * --|--|--
     */

    if((game[0] == game[1] && game[1] == game[2] && 2 == position) || (game[0] == game[3] && game[3] == game[6] && 6 == position) || (game[0] == game[4] && game[4] == game[8] && 8 == position)){
        return `${point} wins`;
    } else if(game.filter(x => x=='').length < 1){
        return `It's a draw!`;
    }

    return 'Play next';
}

// console.log(tickTack('O', 0));
// console.log(tickTack('X', 1));
// console.log(tickTack('O', 2));
// console.log(tickTack('X', 3));
// console.log(tickTack('O', 4));
// console.log(tickTack('X', 5));
// console.log(tickTack('O', 6));
// console.log(tickTack('X', 8));
// console.log(tickTack('O', 7));
