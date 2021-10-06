let Chap = null
let AC = null
function addAuthorCode() {
    let formData = readAuthorCode();
    if(AC == null) {
        insertNewAuthorCode(formData);
        AC = 1;
    }
    return AC;
}

function addChapter(){
    let formData = readChapter();
    if(Chap == null) {
        insertNewChapter(formData);
        Chap =1;
    }
    return Chap;
}

function readAuthorCode() {
    let formData = {};
    formData["Author"] = document.getElementById("Author").value;
    formData["Description"] = document.getElementById("Description").value;
    return formData;
}

function readChapter() {
    let formData = {};
    formData["Chapter"] = document.getElementById("Chapter").value;
    return formData;
}

function insertNewAuthorCode(data) {
    let table = document.getElementById("bookAC").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Author;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Description;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = '<a onClick="onDeleteAC(this)">Delete</a>';

}
function insertNewChapter(data) {
    let table = document.getElementById("bookChap").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let textEdit = document.getElementById("text1");
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Chapter;
    textEdit.innerHTML += cell1.innerHTML;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<a onClick="onDeleteChap(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("Author").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("Chapter").value = "";
}
function onDeleteAC(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookAC").deleteRow(row.rowIndex);
        resetForm();
        AC = null;
    }
}
function onDeleteChap(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookChap").deleteRow(row.rowIndex);
        resetForm();
        Chap =null;
    }
}