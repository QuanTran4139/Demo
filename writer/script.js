function readChapter() {
    let formData = {};
    formData["Chapter"] = document.getElementById("Chapter").value;
    return formData;
}

function insertNewChapter(data) {
    let textEdit = document.getElementById("text1");
    textEdit.innerHTML += data.Chapter;
}

function addChapter(){
    let formData = readChapter();
        insertNewChapter(formData);
}

function onDeleteChap(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookChap").deleteRow(row.rowIndex);
        resetForm();
        Chap =null;
    }
}

function Render()
{
    var authorInput = document.getElementById("text1").value;
    authorInput = authorInput.replace(/<bold[^>]*>/g,'<b>')
        .replace(/<\/bold>/g,'</b>')
        .replace(/<italic[^>]*>/g,'<i>')
        .replace(/<\/italic>/g,'</i>')
        .replace(/<underline[^>]*>/g,'<u>')
        .replace(/<\/underline[^>]*>/g,'</u>');
    authorInput = "<html>" + authorInput + "</html>";
    var convertInputToHTMLElem = new DOMParser().parseFromString(authorInput, "text/xml");
    document.getElementById("text2").innerHTML = convertInputToHTMLElem.firstChild.innerHTML;
}