class Board {
    private _mat: Cell[][];

    constructor() {

        this.mat = [];

        for (let i: number = 0; i < 3; i++) {
            this.mat[i] = [];

            for (let j: number = 0; j < 3; j++) {
                this.mat[i][j] = new Cell();
            }
        }
    }


    get mat(): Cell[][] {
        return this._mat;
    }

    set mat(x: Cell[][]) {
        this._mat = x;
    }



    public placeCodeToRowCol(place: number): MatrixPosition {

        let mp: MatrixPosition = new MatrixPosition();

        if (place == 1) { mp.row = 0; mp.col = 0; }
        else if (place == 2) { mp.row = 0; mp.col = 1; }
        else if (place == 3) { mp.row = 0; mp.col = 2; }
        else if (place == 4) { mp.row = 1; mp.col = 0; }
        else if (place == 5) { mp.row = 1; mp.col = 1; }
        else if (place == 6) { mp.row = 1; mp.col = 2; }
        else if (place == 7) { mp.row = 2; mp.col = 0; }
        else if (place == 8) { mp.row = 2; mp.col = 1; }
        else if (place == 9) { mp.row = 2; mp.col = 2; }


        return mp;
    }



    public positionToPlace(mp: MatrixPosition): number {

        let place: number = 0;

        if (mp.row == 0 && mp.col == 0) { place = 1; }
        else if (mp.row == 0 && mp.col == 1) { place = 2; }
        else if (mp.row == 0 && mp.col == 2) { place = 3; }
        else if (mp.row == 1 && mp.col == 0) { place = 4; }
        else if (mp.row == 1 && mp.col == 1) { place = 5; }
        else if (mp.row == 1 && mp.col == 2) { place = 6; }
        else if (mp.row == 2 && mp.col == 0) { place = 7; }
        else if (mp.row == 2 && mp.col == 1) { place = 8; }
        else if (mp.row == 2 && mp.col == 2) { place = 9; }


        return place;
    }


    public setMoveinPlace(place: number, moveType: eMoveType): void {
        let mp: MatrixPosition = this.placeCodeToRowCol(place);

        this.setMoveinPosition(mp, moveType);

    }


    public setMoveinPosition(mp: MatrixPosition, moveType: eMoveType): void {

        this.mat[mp.row][mp.col].type = moveType;

    }



    public toString(): string {
        let str: string = "";

        document.write("<pre>");

        str += "<br/>-----------<br/>";

        for (let i: number = 0; i < this.mat.length; i++) {

            str += "|";

            for (let j: number = 0; j < this.mat[i].length; j++) {

                if (this.mat[i][j].type == eMoveType.empty) {

                    let mp: MatrixPosition = new MatrixPosition();
                    mp.row = i;
                    mp.col = j;
                    str += "&nbsp;" + this.positionToPlace(mp) + "&nbsp;|";
                }

                else {

                    str += "&nbsp;" + this.mat[i][j] + "&nbsp;|";

                }

            }

            str += "<br/>-----------<br/>";
        }

        document.write("</pre>");

        return str;

    }




    public checkWhoWins(): eMoveType {


        if (this.doCheck(eMoveType.o)) {

            return eMoveType.o;
        }


        if (this.doCheck(eMoveType.x)) {

            return eMoveType.x;
        }


        return eMoveType.empty;

    }






    public doCheck(moveType: eMoveType): boolean {

        if (this.mat[0][0].type == moveType && this.mat[0][1].type == moveType && this.mat[0][2].type == moveType) {
            return true;
        }
        if (this.mat[1][0].type == moveType && this.mat[1][1].type == moveType && this.mat[1][2].type == moveType) {
            return true;
        }
        if (this.mat[2][0].type == moveType && this.mat[2][1].type == moveType && this.mat[2][2].type == moveType) {
            return true;
        }
        if (this.mat[0][0].type == moveType && this.mat[1][0].type == moveType && this.mat[2][0].type == moveType) {
            return true;
        }
        if (this.mat[0][1].type == moveType && this.mat[1][1].type == moveType && this.mat[2][1].type == moveType) {
            return true;
        }
        if (this.mat[0][2].type == moveType && this.mat[1][2].type == moveType && this.mat[2][2].type == moveType) {
            return true;
        }
        if (this.mat[0][0].type == moveType && this.mat[1][1].type == moveType && this.mat[2][2].type == moveType) {
            return true;
        }
        if (this.mat[0][2].type == moveType && this.mat[1][1].type == moveType && this.mat[2][0].type == moveType) {
            return true;
        }

        return false;
    }



    public checkTie(): boolean {

        for (let i: number = 0; i < board.mat.length; i++) {
            for (let j: number = 0; j < board.mat[i].length; j++) {

                if (this.mat[i][j].type == eMoveType.empty) {

                    return false;
                }

            }
        }

        return true;

    }
}





