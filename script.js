function createGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${100 / gridSize}%`;
        square.addEventListener('mouseover', mouseOverSquare);
        grid.appendChild(square);
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

function mouseOverSquare() {
    this.style.backgroundColor = 'black';
}

let gridSize = 16;

const grid = document.querySelector('.grid');

createGrid();
