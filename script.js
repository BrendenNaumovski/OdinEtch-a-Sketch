function createGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${100 / gridSize}%`;
        square.setAttribute("data-id", i);
        square.addEventListener('mouseover', mouseOverSquare);
        grid.appendChild(square);
        mouseOverCount[i] = 0;
    }
}

function setGridSize() {
    let newSize = prompt('Enter new grid size (1-100):');
    while (!(newSize > 0 && newSize <= 100)) {
        if (newSize === null) {
            return;
        }
        newSize = prompt('Please enter a valid number between 1 and 100:');
    }
    gridSize = newSize;
    createGrid();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

function mouseOverSquare() {
    const dataId = this.getAttribute('data-id');
    mouseOverCount[dataId] += 1;
    this.style.backgroundColor = getRandomColor();
    if (mouseOverCount[dataId] <= 10) {
        this.style.opacity = 0.1 * mouseOverCount[dataId];
    }
    
}

let mouseOverCount = [];

let gridSize = 16;

const grid = document.querySelector('.grid');

createGrid();
