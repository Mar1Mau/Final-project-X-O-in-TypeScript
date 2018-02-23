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
var HumanPlayer = /** @class */ (function (_super) {
    __extends(HumanPlayer, _super);
    function HumanPlayer(moveType) {
        return _super.call(this, moveType) || this;
    }
    HumanPlayer.prototype.play = function (board) {
        var place = 0;
        var isLegalMove = false;
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
                var mp = board.placeCodeToRowCol(place);
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
    };
    return HumanPlayer;
}(Player));
//# sourceMappingURL=humanPlayer.js.map