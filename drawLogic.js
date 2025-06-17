const container = document.getElementById("container");

for (let index = 0; index < 16; index++) {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add("column");
    container.append(columnDiv);
    for (let index = 0; index <16; index++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        columnDiv.append(rowDiv);
    }
}