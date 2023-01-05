export default class Helper {

    static createListItem(value) {
        let newItem = document.createElement('li');
        newItem.textContent = value;
        return newItem;
    }

    static createTableRow(row) {
        let newRow = document.createElement('tr');

        for (let cell of Object.values(row)) {
            newRow.appendChild(this.createTableCell(cell));
        }
        return newRow;
    }

    static createTableCell(value) {
        let newCell = document.createElement('td');
        newCell.textContent = value;
        return newCell;
    }
}