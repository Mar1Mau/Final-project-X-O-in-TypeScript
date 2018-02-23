var player1 = new HumanPlayer(eMoveType.x);
var player2 = new ComputerPlayer(eMoveType.o);
var nextPlayer = player1;
var board = new Board();
document.write(board + "");
var btnElement = "<button onclick=\"nextTurn()\"> Next turn </button>";
function nextTurn() {
    nextPlayer.play(board);
    document.write(board + "");
    var winner = board.checkWhoWins();
    var str = "";
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
//# sourceMappingURL=app.js.map