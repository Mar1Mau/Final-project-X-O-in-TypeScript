var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ComputerPlayer = /** @class */ (function (_super) {
    __extends(ComputerPlayer, _super);
    function ComputerPlayer(moveType) {
        return _super.call(this, moveType) || this;
    }
    ComputerPlayer.prototype.play = function (board) {
        var mp = new MatrixPosition();
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
    };
    ComputerPlayer.prototype.WhereToBlock = function (board) {
        var mp = new MatrixPosition();
        mp.empty = true;
        var search = eMoveType.x;
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
    };
    ComputerPlayer.prototype.WhereToAttack = function (board) {
        var mp = new MatrixPosition();
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
            for (var i = 0; i < board.mat.length; i++) {
                for (var j = 0; j < board.mat[i].length; j++) {
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
    };
    ComputerPlayer.prototype.WhereToWin = function (board) {
        var mp = new MatrixPosition();
        mp.empty = true;
        var search = this.moveType;
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
    };
    return ComputerPlayer;
}(Player));
//# sourceMappingURL=computerPlayer.js.map