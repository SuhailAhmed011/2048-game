const input_i = document.querySelector("#input_i");
const score_d = document.querySelector(".score");
const board_d = document.querySelector("#board");




//intialize the board

let width = 6;
let score = 0;
let square = [];

document.addEventListener("DOMContentLoaded", () => {
    start();
});

function start(){
    score = 0;
    square = Array.from({length: width}, () =>
         Array.from({length: width}, () => 0)
    );
    game();
}

function game(){
    let tiles = "";
    for(let i = 0; i<square.length; i++){
        tiles += `<div class = "row">`;
        for(let j =0; j<square[0].length; j++){
            tiles += `<div class = "col"> ${square[i][j]} </div>`;
        }
        tiles += `</div>`
    }
    board_d.innerHTML=tiles;
}
