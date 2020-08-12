var TicTacToe = /** @class */ (function () {
    function TicTacToe(t) {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isPlaying = true;
        this.computerPlayer = -1;
        this.table = t;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    TicTacToe.prototype.possibilities = function (possiblities, posssibleCell) {
        for (var i = 0; i < possiblities.length; i++) {
            if (possiblities[i] == posssibleCell)
                return true;
        }
        return false;
    };
    TicTacToe.prototype.generatePossibility = function () {
        return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    };
    TicTacToe.prototype.computerTurn = function () {
        var possibilities = [];
        for (var i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                possibilities.push(i);
        }
        while (true) {
            var posssibleCell = this.generatePossibility();
            if (this.possibilities(possibilities, posssibleCell))
                return posssibleCell;
        }
    };
    TicTacToe.prototype.isFull = function () {
        for (var i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                return false;
        }
        return true;
    };
    TicTacToe.prototype.play = function (x, y) {
        var p = 3 * (x - 1) + (y - 1);
        if (!this.isPlaying) {
            alert("Sorry, Game over");
        }
        else {
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
                    }
                    else {
                        if (this.isFull()) {
                            this.isPlaying = false;
                            alert("Draw match");
                        }
                        else {
                            var v = this.computerTurn();
                            this.board[v] = -1;
                            this.table[v].style.color = "red";
                            this.table[v].innerHTML = "O";
                            if (this.isWin(this.board) == -1) {
                                this.isPlaying = false;
                                alert("Sorry, you have lost");
                            }
                            else {
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
    };
    TicTacToe.prototype.isWin = function (board) {
        var b = board[1];
        if (board[0] == b && b == board[2] && b != 0)
            return b;
        b = board[4];
        if (board[3] == b && b == board[5] && b != 0)
            return b;
        b = board[7];
        if (board[6] == b && b == board[8] && b != 0)
            return b;
        b = board[3];
        if (board[0] == b && b == board[6] && b != 0)
            return b;
        b = board[4];
        if (board[1] == b && b == board[7] && b != 0)
            return b;
        b = board[5];
        if (board[2] == b && b == board[8] && b != 0)
            return b;
        b = board[4];
        if (board[0] == b && b == board[8] && b != 0)
            return b;
        if (board[2] == b && b == board[6] && b != 0)
            return b;
        return 0;
    };
    TicTacToe.prototype.reset = function () {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isPlaying = true;
        for (var i = 0; i < 9; i++) {
            this.table[i].style.color = "white";
            this.table[i].innerHTML = "&nbsp;";
        }
    };
    return TicTacToe;
}());
window.onload = function () {
    var reset = document.getElementById("reset");
    var cell11 = document.getElementById("cell11");
    var cell12 = document.getElementById("cell12");
    var cell13 = document.getElementById("cell13");
    var cell21 = document.getElementById("cell21");
    var cell22 = document.getElementById("cell22");
    var cell23 = document.getElementById("cell23");
    var cell31 = document.getElementById("cell31");
    var cell32 = document.getElementById("cell32");
    var cell33 = document.getElementById("cell33");
    var ticTacToe = new TicTacToe([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);
    cell11.onclick = function () { ticTacToe.play(1, 1); };
    cell12.onclick = function () { ticTacToe.play(1, 2); };
    cell13.onclick = function () { ticTacToe.play(1, 3); };
    cell21.onclick = function () { ticTacToe.play(2, 1); };
    cell22.onclick = function () { ticTacToe.play(2, 2); };
    cell23.onclick = function () { ticTacToe.play(2, 3); };
    cell31.onclick = function () { ticTacToe.play(3, 1); };
    cell32.onclick = function () { ticTacToe.play(3, 2); };
    cell33.onclick = function () { ticTacToe.play(3, 3); };
    reset.onclick = function () { ticTacToe.reset(); };
};
