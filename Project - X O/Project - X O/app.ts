

let player1: Player = new HumanPlayer(eMoveType.x);
let player2: Player = new ComputerPlayer(eMoveType.o);

let nextPlayer: Player = player1;



let board: Board = new Board();

document.write(board + "");

let btnElement: string = `<button onclick="nextTurn()"> Next turn </button>`;



function nextTurn(): void {
    
    nextPlayer.play(board);

    document.write(board+"");

    let winner: eMoveType = board.checkWhoWins();
    let str: string = "";


    if (winner == eMoveType.empty) {

        if (board.checkTie()) {

            alert("It's a tie! \nGame over!");
        }

        else {

            if (nextPlayer.moveType == eMoveType.x) {
                nextPlayer = player2;
            }
            else if (nextPlayer.moveType == eMoveType.o) {
                nextPlayer = player1;
            }

            document.write(btnElement);
        }

    }
    else {
        if (winner == eMoveType.o) {
            str = "0";

        }
        else if (winner == eMoveType.x) {
            str = "X";

        }
        
        alert("Game Over!\n" + str + " is winner!");

    }



}




