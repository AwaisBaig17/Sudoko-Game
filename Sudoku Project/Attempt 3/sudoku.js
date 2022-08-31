var numSelected = null;
var selectedTile = null;
var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function () {
    setGame();
}

function setGame() {
    //Digit 1-9
    var sizeOfBoard = 9;
    for (let i = 1; i <= sizeOfBoard; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber)
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    //Board 9x9
    for (let row = 0; row < sizeOfBoard; row++) {
        for (let column = 0; column < sizeOfBoard; column++) {
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + column.toString();
            if (board[row][column] != "-") {
                tile.innerText = board[row][column];
                tile.classList.add("not-empty-nums")
            }
            if (row == 2 || row == 5) {
                tile.classList.add("horizontal-border");
            }
            if (column == 2 || column == 5) {
                tile.classList.add("vertical-border");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tiles");
            document.getElementById("board").appendChild(tile);
        }
    }
}
function selectNumber() {

    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        let coordinates = this.id.split("-");
        let r = parseInt(coordinates[0]);
        let c = parseInt(coordinates[1]);
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors++;
            document.getElementById("errors").innerText = errors;
        }
    }
}