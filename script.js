//create 16x16 grid of square divs (work in progress)
const divContain = document.getElementById("container");
let rows = document.getElementsByClassName("row");

function makeGrid(rowNum, colNum) {
    // Creates rows
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        divContain.appendChild(row).className = "row";
    };
    let rows = document.getElementsByClassName("row");
    // Creates columns
    for (let l = 0; l < rows.length; l++) {
        for (let j = 0; j < colNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

makeGrid(16, 16)