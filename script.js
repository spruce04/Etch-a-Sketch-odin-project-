//DOM selectors, initial variables
const colours = ['red', 'blue', 'green', 'black', 'orange', 'purple', 'pink', 'yellow'];
let squareColour;
const divContain = document.getElementById("container");
let rows = document.getElementsByClassName("row");
const random = document.getElementById("random");
const choice = document.getElementById("choice");
const reset = document.getElementById("default");
const selected = document.getElementById("select");
const change = document.getElementById("changeGrid");
const gridSize = document.getElementById("gridSize");
let randomiseColours = false;

//make a grid
function makeGrid(gridNum) {
    let dimensions = 480/gridNum;
    dimensions = dimensions.toFixed(0) //Determine height and width to keep grid size constant.
    // Creates rows
    for (let i = 0; i < gridNum; i++) {
        let row = document.createElement("div");   
        divContain.appendChild(row).className = "row";
        row.style.width = `${dimensions}px`;
        row.style.height = `${dimensions * gridNum}px`;
    };
    rows = document.getElementsByClassName("row");
    // Creates columns
    for (let l = 0; l < rows.length; l++) {
        for (let j = 0; j < gridNum; j++) {
            let newCell = document.createElement("div");
            if (screen.width > 575) { //Formatting doesn't change for mobile devices.
            newCell.style.width = `${dimensions}px`
            newCell.style.height = `${dimensions}px`};
            rows[j].appendChild(newCell).className = "square";
        };
    };
};

//clear grid
function clearGrid() {
    divContain.textContent = ""
};

//determine colour
squareColour = 'black'
function changeColour (target) {
    target.style.backgroundColor = squareColour
}

//make initial grid when the site loads in
makeGrid(16)

//detect whenever a square is selected
divContain.addEventListener("mouseover", function (e) {
    target = e.target;
    if (target.matches("div.square")) {
        if (randomiseColours == true) {
            randomColour();
        }
        changeColour(target);
    }
});

//reset grid 
reset.addEventListener("click", function() {
    location.reload();
});

//random colour
function randomColour() {
    squareColour = colours[Math.floor(Math.random() * 8)];
};

random.addEventListener("click", function() {
    randomiseColours = true;
});

//choose colour
selected.addEventListener("click", function() {
    let chosenChoice = choice.value;
    squareColour = chosenChoice;   
    randomiseColours = false;
});

//change grid size
change.addEventListener("click", function() {
    let newGridSize = gridSize.value;
    if (newGridSize > 100) {
        return
    }
    clearGrid()
    makeGrid(newGridSize)
});