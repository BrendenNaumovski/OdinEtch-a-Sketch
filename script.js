function mouseOverSquare() {
    this.style.backgroundColor = 'black';
}

const gridSize = 16;

const grid = document.querySelector('.grid');

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', mouseOverSquare);
        row.appendChild(square);
    }
    grid.appendChild(row);
}
