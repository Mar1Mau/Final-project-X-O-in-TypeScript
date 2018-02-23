var Player = /** @class */ (function () {
    function Player(moveType) {
        this.moveType = moveType;
    }
    Object.defineProperty(Player.prototype, "moveType", {
        get: function () {
            return this._moveType;
        },
        set: function (x) {
            this._moveType = x;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
//# sourceMappingURL=player.js.map