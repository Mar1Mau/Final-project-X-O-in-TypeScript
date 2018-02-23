class ComputerPlayer extends Player {

    constructor(moveType: eMoveType) {
        super(moveType);
    }



    public play(board: Board): void {

        let mp: MatrixPosition = new MatrixPosition();
        


        mp = this.WhereToWin(board);


        if (mp.empty == true) {

            mp = this.WhereToBlock(board);
        }


        if (mp.empty == true) {

            mp = this.WhereToAttack(board);
        }


        if (mp.empty == false) {

            board.setMoveinPosition(mp, this.moveType);
        }


    }




    private WhereToBlock(board: Board): MatrixPosition {

        let mp: MatrixPosition = new MatrixPosition();
        mp.empty = true;



        let search: eMoveType = eMoveType.x;
        if (this.moveType == eMoveType.x) {
            search = eMoveType.o;
        }
        else {
            search = eMoveType.x;
        }



        //שורה ראשונה

        if (board.mat[0][0].type == search && board.mat[0][1].type == search && board.mat[0][2].type == eMoveType.empty) {

            mp.row = 0;
            mp.col = 2;
            mp.empty = false;

        }
        if (board.mat[0][0].type == eMoveType.empty && board.mat[0][1].type == search && board.mat[0][2].type == search) {

            mp.row = 0;
            mp.col = 0;
            mp.empty = false;

        }
        if (board.mat[0][0].type == search && board.mat[0][1].type == eMoveType.empty && board.mat[0][2].type == search) {


            mp.row = 0;
            mp.col = 1;
            mp.empty = false;

        }

        //שורה שניה

        if (board.mat[1][0].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[1][2].type == search) {

            mp.row = 1;
            mp.col = 0;
            mp.empty = false;
        }

        if (board.mat[1][0].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[1][2].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;

        }
        if (board.mat[1][0].type == search && board.mat[1][1].type == search && board.mat[1][2].type == eMoveType.empty) {


            mp.row = 1;
            mp.col = 2;
            mp.empty = false;

        }

        //שורה שלישית

        if (board.mat[2][0].type == search && board.mat[2][1].type == search && board.mat[2][2].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 2;
            mp.empty = false;

        }
        if (board.mat[2][0].type == eMoveType.empty && board.mat[2][1].type == search && board.mat[2][2].type == search) {

            mp.row = 2;
            mp.col = 0;
            mp.empty = false;

        }

        if (board.mat[2][0].type == search && board.mat[2][1].type == eMoveType.empty && board.mat[2][2].type == search) {

            mp.row = 2;
            mp.col = 1;
            mp.empty = false;

        }



        // עמודה ראשונה

        if (board.mat[0][0].type == eMoveType.empty && board.mat[1][0].type == search && board.mat[2][0].type == search) {

            mp.row = 0;
            mp.col = 0;
            mp.empty = false;

        }

        if (board.mat[0][0].type == search && board.mat[1][0].type == eMoveType.empty && board.mat[2][0].type == search) {

            mp.row = 1;
            mp.col = 0;
            mp.empty = false;

        }

        if (board.mat[0][0].type == search && board.mat[1][0].type == search && board.mat[2][0].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 0;
            mp.empty = false;

        }



        ///עמודה שניה

        if (board.mat[0][1].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[2][1].type == search) {

            mp.row = 0;
            mp.col = 1;
            mp.empty = false;

        }

        if (board.mat[0][1].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[2][1].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;

        }

        if (board.mat[0][1].type == search && board.mat[1][1].type == search && board.mat[2][1].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 1;
            mp.empty = false;

        }


        //עמודה שלישית

        if (board.mat[0][2].type == eMoveType.empty && board.mat[1][2].type == search && board.mat[2][2].type == search) {

            mp.row = 0;
            mp.col = 2;
            mp.empty = false;

        }

        if (board.mat[0][2].type == search && board.mat[1][2].type == eMoveType.empty && board.mat[2][2].type == search) {

            mp.row = 1;
            mp.col = 2;
            mp.empty = false;

        }

        if (board.mat[0][2].type == search && board.mat[1][2].type == search && board.mat[2][2].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 2;
            mp.empty = false;

        }


        //אלכסון ראשי


        if (board.mat[0][0].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[2][2].type == search) {

            mp.row = 0;
            mp.col = 0;
            mp.empty = false;

        }

        if (board.mat[0][0].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[2][2].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;

        }


        if (board.mat[0][0].type == search && board.mat[1][1].type == search && board.mat[2][2].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 2;
            mp.empty = false;

        }

        //אלכסון משני


        if (board.mat[0][2].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[2][0].type == search) {

            mp.row = 0;
            mp.col = 2;
            mp.empty = false;

        }

        if (board.mat[0][2].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[2][0].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;

        }

        if (board.mat[0][2].type == search && board.mat[1][1].type == search && board.mat[2][0].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 0;
            mp.empty = false;

        }


        return mp;

    }





    private WhereToAttack(board: Board): MatrixPosition {

        let mp: MatrixPosition = new MatrixPosition();
        mp.empty = true;


        if (mp.empty && board.mat[1][1].type == eMoveType.empty) {
            mp.row = 1;
            mp.col = 1;
            mp.empty = false;
        }

        if (mp.empty && board.mat[0][0].type == eMoveType.empty) {
            mp.row = 0;
            mp.col = 0;
            mp.empty = false;
        }

        if (mp.empty && board.mat[0][2].type == eMoveType.empty) {
            mp.row = 0;
            mp.col = 2;
            mp.empty = false;
        }

        if (mp.empty && board.mat[2][0].type == eMoveType.empty) {
            mp.row = 2;
            mp.col = 0;
            mp.empty = false;
        }

        if (mp.empty && board.mat[2][2].type == eMoveType.empty) {
            mp.row = 2;
            mp.col = 2;
            mp.empty = false;
        }



        if (mp.empty == true) {
            for (let i: number = 0; i < board.mat.length; i++) {
                for (let j: number = 0; j < board.mat[i].length; j++) {

                    if (board.mat[i][j].type == eMoveType.empty) {


                        mp.row = i;
                        mp.col = j;
                        mp.empty = false;

                        break;

                    }
                }

            }
        }

        return mp;
    }



    private WhereToWin(board: Board): MatrixPosition {

        let mp: MatrixPosition = new MatrixPosition();
        mp.empty = true;

        let search: eMoveType = this.moveType;


        //שורה ראשונה

        if (board.mat[0][0].type == search && board.mat[0][1].type == search && board.mat[0][2].type == eMoveType.empty) {

            mp.row = 0;
            mp.col = 2;
            mp.empty = false;
        }
        if (board.mat[0][0].type == eMoveType.empty && board.mat[0][1].type == search && board.mat[0][2].type == search) {

            mp.row = 0;
            mp.col = 0;
            mp.empty = false;
        }
        if (board.mat[0][0].type == search && board.mat[0][1].type == eMoveType.empty && board.mat[0][2].type == search) {


            mp.row = 0;
            mp.col = 1;
            mp.empty = false;
        }

        //שורה שניה

        if (board.mat[1][0].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[1][2].type == search) {

            mp.row = 1;
            mp.col = 0;
            mp.empty = false;
        }
        if (board.mat[1][0].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[1][2].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;
        }
        if (board.mat[1][0].type == search && board.mat[1][1].type == search && board.mat[1][2].type == eMoveType.empty) {


            mp.row = 1;
            mp.col = 2;
            mp.empty = false;
        }

        //שורה שלישית

        if (board.mat[2][0].type == search && board.mat[2][1].type == search && board.mat[2][2].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 2;
            mp.empty = false;
        }
        if (board.mat[2][0].type == eMoveType.empty && board.mat[2][1].type == search && board.mat[2][2].type == search) {

            mp.row = 2;
            mp.col = 0;
            mp.empty = false;
        }

        if (board.mat[2][0].type == search && board.mat[2][1].type == eMoveType.empty && board.mat[2][2].type == search) {

            mp.row = 2;
            mp.col = 1;
            mp.empty = false;
        }


        // עמודה ראשונה

        if (board.mat[0][0].type == eMoveType.empty && board.mat[1][0].type == search && board.mat[2][0].type == search) {

            mp.row = 0;
            mp.col = 0;
            mp.empty = false;

        }

        if (board.mat[0][0].type == search && board.mat[1][0].type == eMoveType.empty && board.mat[2][0].type == search) {

            mp.row = 1;
            mp.col = 0;
            mp.empty = false;

        }

        if (board.mat[0][0].type == search && board.mat[1][0].type == search && board.mat[2][0].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 0;
            mp.empty = false;

        }



        ///עמודה שניה

        if (board.mat[0][1].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[2][1].type == search) {

            mp.row = 0;
            mp.col = 1;
            mp.empty = false;

        }

        if (board.mat[0][1].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[2][1].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;

        }

        if (board.mat[0][1].type == search && board.mat[1][1].type == search && board.mat[2][1].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 1;
            mp.empty = false;

        }


        //עמודה שלישית

        if (board.mat[0][2].type == eMoveType.empty && board.mat[1][2].type == search && board.mat[2][2].type == search) {

            mp.row = 0;
            mp.col = 2;
            mp.empty = false;

        }

        if (board.mat[0][2].type == search && board.mat[1][2].type == eMoveType.empty && board.mat[2][2].type == search) {

            mp.row = 1;
            mp.col = 2;
            mp.empty = false;

        }

        if (board.mat[0][2].type == search && board.mat[1][2].type == search && board.mat[2][2].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 2;
            mp.empty = false;

        }

        //אלקסון ראשי

        if (board.mat[0][0].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[2][2].type == search) {

            mp.row = 0;
            mp.col = 0;
            mp.empty = false;
        }

        if (board.mat[0][0].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[2][2].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;
        }


        if (board.mat[0][0].type == search && board.mat[1][1].type == search && board.mat[2][2].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 2;
            mp.empty = false;
        }


        //אלקסון משני


        if (board.mat[0][2].type == eMoveType.empty && board.mat[1][1].type == search && board.mat[2][0].type == search) {

            mp.row = 0;
            mp.col = 2;
            mp.empty = false;
        }

        if (board.mat[0][2].type == search && board.mat[1][1].type == eMoveType.empty && board.mat[2][0].type == search) {

            mp.row = 1;
            mp.col = 1;
            mp.empty = false;
        }

        if (board.mat[0][2].type == search && board.mat[1][1].type == search && board.mat[2][0].type == eMoveType.empty) {

            mp.row = 2;
            mp.col = 0;
            mp.empty = false;
        }


        return mp;

    }
}





