enum eMoveType {
    "x",
    "o",
    "empty"
}

class Cell {
    private _cellType: eMoveType;

    constructor(type: eMoveType = eMoveType.empty) {
        this.type = type;
    }

    get type(): eMoveType {
        return this._cellType;
    }

    set type(cell: eMoveType) {
        this._cellType = cell;
    }

    public toString(): string {
        let str: string = "&nbsp";
        if (this.type == eMoveType.o) {
            str = "O";
        }
        else if (this.type == eMoveType.x) {
            str = "X";
        }

        return str;
    }
}