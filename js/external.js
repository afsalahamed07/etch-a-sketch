let sketchpad = document.querySelector("#sketchpad");

// user input on grid-size
let slider = document.querySelector("#customRange3");

// show grid-size
let showGridSize = document.querySelector("#grid-size");

// reset button
// let resetBtn = document.querySelector("#btn-reset")


init();


// evetlistener for slider
// calling init function not working
slider.addEventListener("input", () => {
    gridSize = slider.value;
    showGridSize.textContent = `${gridSize} * ${gridSize}`;
    console.log(showGridSize);
    drawBoxes(gridSize);
    let boxes = document.querySelectorAll(".box");

    boxSizing(boxes, gridSize);
});

function init() {
    gridSize = slider.value;
    showGridSize.textContent = `${gridSize} x ${gridSize}`;
    console.log(showGridSize);
    drawBoxes(gridSize);
    let boxes = document.querySelectorAll(".box");

    boxSizing(boxes, gridSize);
}


function boxSizing(boxes, gridSize) {
    boxes.forEach(box => {
        box.style.cssText = `width: ${640 / gridSize}px; height: ${640 / gridSize}px`;

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = getRandomColor();
        })
    });
}


function getRandomColor() {
    // returns random color hexcode
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function drawBoxes(gridSize) {
    // adjusting grid sizw acording to user input
    sketchpad.style.cssText = `grid-template-columns: repeat(${gridSize}, ${640 / gridSize}px); grid-template-rows: repeat(${gridSize}, ${640 / gridSize}px)`;
    sketchpad.innerHTML = "";
    // creating boxes
    for (let i = 0; i < (gridSize * gridSize); i++) {
        sketchpad.innerHTML += '<div class="box"><div>';
    }
}