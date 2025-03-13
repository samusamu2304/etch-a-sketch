const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

const createGrid = function (dimension) {
    container.innerHTML = ``;
    for (let i = 0; i < (dimension ** 2); i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.minWidth = `${100/dimension}%`;
        cell.style.minHeight = `${100/dimension}%`;
        cell.addEventListener("mouseover", function (){
            cell.style.backgroundColor = "#000";
        });
        container.appendChild(cell);
    }
}

resetButton.addEventListener("click", function (){
    createGrid(prompt("Enter grid size"));
});

