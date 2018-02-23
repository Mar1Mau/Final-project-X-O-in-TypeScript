abstract class Player {
    private _moveType: eMoveType;

    constructor(moveType: eMoveType) {
        this.moveType = moveType;
    }

    get moveType(): eMoveType {
        return this._moveType;
    }

    set moveType(x: eMoveType) {
        this._moveType = x;
    }

    public abstract play(board: Board): void;
}