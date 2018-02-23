var Board = /** @class */ (function () {
    function Board() {
        this.mat = [];
        for (var i = 0; i < 3; i++) {
            this.mat[i] = [];
            for (var j = 0; j < 3; j++) {
                this.mat[i][j] = new Cell();
            }
        }
    }
    Object.defineProperty(Board.prototype, "mat", {
        get: function () {
            return this._mat;
        },
        set: function (x) {
            this._mat = x;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.placeCodeToRowCol = function (place) {
        var mp = new MatrixPosition();
        if (place == 1) {
            mp.row = 0;
            mp.col = 0;
        }
        else if (place == 2) {
            mp.row = 0;
            mp.col = 1;
        }
        else if (place == 3) {
            mp.row = 0;
            mp.col = 2;
        }
        else if (place == 4) {
            mp.row = 1;
            mp.col = 0;
        }
        else if (place == 5) {
            mp.row = 1;
            mp.col = 1;
        }
        else if (place == 6) {
            mp.row = 1;
            mp.col = 2;
        }
        else if (place == 7) {
            mp.row = 2;
            mp.col = 0;
        }
        else if (place == 8) {
            mp.row = 2;
            mp.col = 1;
        }
        else if (place == 9) {
            mp.row = 2;
            mp.col = 2;
        }
        return mp;
    };
    Board.prototype.positionToPlace = function (mp) {
        var place = 0;
        if (mp.row == 0 && mp.col == 0) {
            place = 1;
        }
        else if (mp.row == 0 && mp.col == 1) {
            place = 2;
        }
        else if (mp.row == 0 && mp.col == 2) {
            place = 3;
        }
        else if (mp.row == 1 && mp.col == 0) {
            place = 4;
        }
        else if (mp.row == 1 && mp.col == 1) {
            place = 5;
        }
        else if (mp.row == 1 && mp.col == 2) {
            place = 6;
        }
        else if (mp.row == 2 && mp.col == 0) {
            place = 7;
        }
        else if (mp.row == 2 && mp.col == 1) {
            place = 8;
        }
        else if (mp.row == 2 && mp.col == 2) {
            place = 9;
        }
        return place;
    };
    Board.prototype.setMoveinPlace = function (place, moveType) {
        var mp = this.placeCodeToRowCol(place);
        this.setMoveinPosition(mp, moveType);
    };
    Board.prototype.setMoveinPosition = function (mp, moveType) {
        this.mat[mp.row][mp.col].type = moveType;
    };
    Board.prototype.toString = function () {
        var str = "";
        document.write("<pre>");
        str += "<br/>-----------<br/>";
        for (var i = 0; i < this.mat.length; i++) {
            str += "|";
            for (var j = 0; j < this.mat[i].length; j++) {
                if (this.mat[i][j].type == eMoveType.empty) {
                    var mp = new MatrixPosition();
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
    };
    Board.prototype.checkWhoWins = function () {
        if (this.doCheck(eMoveType.o)) {
            return eMoveType.o;
        }
        if (this.doCheck(eMoveType.x)) {
            return eMoveType.x;
        }
        return eMoveType.empty;
    };
    Board.prototype.doCheck = function (moveType) {
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
    };
    Board.prototype.checkTie = function () {
        for (var i = 0; i < board.mat.length; i++) {
            for (var j = 0; j < board.mat[i].length; j++) {
                if (this.mat[i][j].type == eMoveType.empty) {
                    return false;
                }
            }
        }
        return true;
    };
    return Board;
}());
//# sourceMappingURL=board.js.map