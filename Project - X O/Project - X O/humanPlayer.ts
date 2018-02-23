class HumanPlayer extends Player {

    constructor(moveType: eMoveType) {
        super(moveType);
    }


    public play(board: Board): void {


        let place: number = 0;

        let isLegalMove: boolean = false;

        while (isLegalMove == false) {

            place = Number(prompt("Yor turn"));

            if (place <= 0 || place >= 10) {
                alert("Error. Not valid number.\nPlease enter a number from 1 to 9");
                isLegalMove = false;
            }
            else if (isNaN(place)) {
                alert("Erro. Please enter only numbers");
                isLegalMove = false;
            }

            else {

                let mp: MatrixPosition = board.placeCodeToRowCol(place);

                if (board.mat[mp.row][mp.col].type == eMoveType.empty) {
                    isLegalMove = true;
                }
                else {
                    alert("Erro. Place №" + place + " is already taken.");
                    isLegalMove = false;
                }
            }
        }

        board.setMoveinPlace(place, this.moveType);

    }


}