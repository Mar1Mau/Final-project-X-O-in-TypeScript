var eMoveType;
(function (eMoveType) {
    eMoveType[eMoveType["x"] = 0] = "x";
    eMoveType[eMoveType["o"] = 1] = "o";
    eMoveType[eMoveType["empty"] = 2] = "empty";
})(eMoveType || (eMoveType = {}));
var Cell = /** @class */ (function () {
    function Cell(type) {
        if (type === void 0) { type = eMoveType.empty; }
        this.type = type;
    }
    Object.defineProperty(Cell.prototype, "type", {
        get: function () {
            return this._cellType;
        },
        set: function (cell) {
            this._cellType = cell;
        },
        enumerable: true,
        configurable: true
    });
    Cell.prototype.toString = function () {
        var str = "&nbsp";
        if (this.type == eMoveType.o) {
            str = "O";
        }
        else if (this.type == eMoveType.x) {
            str = "X";
        }
        return str;
    };
    return Cell;
}());
//# sourceMappingURL=cell.js.map