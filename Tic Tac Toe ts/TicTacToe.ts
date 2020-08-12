class TicTacToe {
    board: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    table: HTMLElement[];
    isPlaying: boolean = true;
    computerPlayer: number = -1;

    constructor(t: HTMLElement[]) {
        this.table = t;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    possibilities(possiblities: number[], posssibleCell: number): boolean {
        for (let i = 0; i < possiblities.length; i++) {
            if (possiblities[i] == posssibleCell) return true;
        }
        return false;
    }
    generatePossibility(): number {
        return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    }
    computerTurn(): number {
        let possibilities: number[] = [];
        for (let i = 0; i < 9; i++) {
            if (this.board[i] == 0) possibilities.push(i);
        }
        while (true) {
            let posssibleCell: number = this.generatePossibility();
            if (this.possibilities(possibilities, posssibleCell)) return posssibleCell;
        }
    }


    isFull(): boolean {
        for (let i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                return false;
        }
        return true;
    }


    play(x: number, y: number) {
        let p: number = 3 * (x - 1) + (y - 1);
        if (!this.isPlaying) {
            alert("Sorry, Game over");
        } else {
            if (this.board[p] == this.computerPlayer) {
                alert("already played");
            }
            else {
                if (this.board[p] == -this.computerPlayer) {
                    alert("already played");
                }
                else {
                    this.table[p].style.color = "green";
                    this.table[p].innerHTML = "X";
                    this.board[p] = 1;
                    if (this.isWin(this.board) == 1) {
                        this.isPlaying = false;
                        alert("Congratulations,You have won!");
                    } else {
                        if (this.isFull()) {
                            this.isPlaying = false;
                            alert("Draw match");
                        } else {
                            let v = this.computerTurn();
                            this.board[v] = -1;
                            this.table[v].style.color = "red";
                            this.table[v].innerHTML = "O";
                            if (this.isWin(this.board) == -1) {
                                this.isPlaying = false;
                                alert("Sorry, you have lost");
                            } else {
                                if (this.isFull()) {
                                    this.isPlaying = false;
                                    alert("Draw match");
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    isWin(board: number[]): number {
        let b = board[1];
        if (board[0] == b && b == board[2] && b != 0) return b;
        b = board[4];
        if (board[3] == b && b == board[5] && b != 0) return b;
        b = board[7];
        if (board[6] == b && b == board[8] && b != 0) return b;
        b = board[3];
        if (board[0] == b && b == board[6] && b != 0) return b;
        b = board[4];
        if (board[1] == b && b == board[7] && b != 0) return b;
        b = board[5];
        if (board[2] == b && b == board[8] && b != 0) return b;
        b = board[4];
        if (board[0] == b && b == board[8] && b != 0) return b;
        if (board[2] == b && b == board[6] && b != 0) return b;
        return 0;
    }

    reset() {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isPlaying = true;
        for (let i = 0; i < 9; i++) {
            this.table[i].style.color = "white";
            this.table[i].innerHTML = "&nbsp;";
        }
    }
}


window.onload = () => {
    let reset: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");
    let cell11: HTMLElement = <HTMLElement>document.getElementById("cell11");
    let cell12: HTMLElement = <HTMLElement>document.getElementById("cell12");
    let cell13: HTMLElement = <HTMLElement>document.getElementById("cell13");
    let cell21: HTMLElement = <HTMLElement>document.getElementById("cell21");
    let cell22: HTMLElement = <HTMLElement>document.getElementById("cell22");
    let cell23: HTMLElement = <HTMLElement>document.getElementById("cell23");
    let cell31: HTMLElement = <HTMLElement>document.getElementById("cell31");
    let cell32: HTMLElement = <HTMLElement>document.getElementById("cell32");
    let cell33: HTMLElement = <HTMLElement>document.getElementById("cell33");

    let ticTacToe: TicTacToe = new TicTacToe([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);
    cell11.onclick = () => { ticTacToe.play(1, 1); }
    cell12.onclick = () => { ticTacToe.play(1, 2); }
    cell13.onclick = () => { ticTacToe.play(1, 3); }
    cell21.onclick = () => { ticTacToe.play(2, 1); }
    cell22.onclick = () => { ticTacToe.play(2, 2); }
    cell23.onclick = () => { ticTacToe.play(2, 3); }
    cell31.onclick = () => { ticTacToe.play(3, 1); }
    cell32.onclick = () => { ticTacToe.play(3, 2); }
    cell33.onclick = () => { ticTacToe.play(3, 3); }
    reset.onclick = () => { ticTacToe.reset(); }
}