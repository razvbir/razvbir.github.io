function playMeowSound()
{
    let meowSound = document.getElementById("meow-sound");
    meowSound.volume = 0.05;
    meowSound.play();
}

function hidePages()
{
    for(page of availablePages) {
        let domElem = document.getElementById(page);
        if (typeof domElem === "undefined") continue;
        domElem.style.display = "none";
    }
}

function showPage(pageName)
{
    let domElem = document.getElementById(pageName);
    if (typeof domElem === "undefined") {
        console.error(`${pageName} not found`);
        return;
    }
    domElem.style.display = "block";
}

function createListItem(value) {
    let newItem = document.createElement('li');
    newItem.textContent = value;
    return newItem;
}

function createTableRow(row) {
    let newRow = document.createElement('tr');

    for (let cell of Object.values(row)) {
        newRow.appendChild(createTableCell(cell));
    }
    return newRow;
}

function createTableCell(value) {
    let newCell = document.createElement('td');
    newCell.textContent = value;
    return newCell;
}

