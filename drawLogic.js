const container = document.getElementById("container");

function setGrid(gridSize) {

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    for (let index = 0; index < gridSize; index++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add("column");
        container.append(columnDiv);
        for (let index = 0; index < gridSize; index++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            columnDiv.append(rowDiv);
        }
    }


    const gridDivs = document.querySelectorAll(('.row'));

    for (let i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener('mouseover', event => {
        gridDivs[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`;
        });
        
    }
}

setGrid(16);

const gridChangeButton = document.getElementById("changeGrid");

gridChangeButton.addEventListener('click', (event) => {
    let userInput = 0;
    do {
        userInput = parseInt(prompt('Input Grid size less the 101 and larger then 0', "16"), 10);
    } while (!(Number.isInteger(userInput) && userInput <= 100 && userInput > 0));

    setGrid(userInput);
});