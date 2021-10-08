function readChapter() {
    let data = document.getElementById("Chapter").value;
    let formData = "<span style='font-size: 300%'" +">"+"<b" +">" + data +  "</b></span>";
    return formData;
}

function insertNewChapter(data) {
    let textEdit = document.getElementById("text1");
    textEdit.innerHTML += (data);
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

function selectStyle(){
    let e = document.getElementById("s1");
    let Style = e.options[e.selectedIndex].value;
    return getSel(Style);
}

function selectAlign(){
    let e = document.getElementById("s3");
    let Style = e.options[e.selectedIndex].value;
    return getSel(Style);
}

function getSel(data) {
    // obtain the object reference for the textarea>
    let txtarea = document.getElementById("text1");

    /*let txtSelect=[];
    for(var i=0;i<txtarea.length;i++){
        txtSelect.push(txtarea[i]);
    }*/
    // obtain the index of the first selected character
    let start = txtarea.selectionStart.toString();
    // obtain the index of the last selected character
    let finish = txtarea.selectionEnd.toString();
    let allText = txtarea.value;
    // obtain the selected text
    let sel = "";
    for(let i = start;i<finish;i++){
       sel = sel + allText[i];
    }
    let startInt = parseInt(start);
    let finishInt = parseInt(finish);
    //append the text;
    let newText = allText.substring(0, startInt) +"<" +data+">" +sel+"</"+data+">" + allText.substring(finishInt, allText.length);
    txtarea.value = newText;
}

function selectSize(){
    let e = document.getElementById("s2");
    let Style = e.options[e.selectedIndex].value;
    return getSize(Style);
}

function getSize(data) {
    // obtain the object reference for the textarea>
    let textSize = document.getElementById("text1");

    /*let txtSelect=[];
    for(var i=0;i<txtarea.length;i++){
        txtSelect.push(txtarea[i]);
    }*/
    // obtain the index of the first selected character
    let start = textSize.selectionStart.toString();
    // obtain the index of the last selected character
    let finish = textSize.selectionEnd.toString();
    let allText = textSize.value;
    // obtain the selected text
    let sel = "";
    for(let i = start;i<finish;i++){
        sel = sel + allText[i];
    }
    let startInt = parseInt(start);
    let finishInt = parseInt(finish);
    //append the text;
    let newText = allText.substring(0, startInt) +"<span style='font-size:" +data+"'>" +sel+ "</span>" + allText.substring(finishInt, allText.length);
    textSize.value = newText;
}

function Render()
{
    var authorInput = document.getElementById("text1").value;
    authorInput = authorInput.replace(/<bold[^>]*>/g,'<b>')														//Replace tag <bold> with <b>
        .replace(/<\/bold>/g,'</b>')														//Replace tag </bold> with </b>
        .replace(/<italic[^>]*>/g,'<i>')													//Replace tag <italic> with <i>
        .replace(/<\/italic>/g,'</i>')														//Replace tag </italic> with </i>
        .replace(/<underline[^>]*>/g,'<u>')												//Replace tag <underline> with <u>
        .replace(/<\/underline[^>]*>/g,'</u>')												//Replace tag </underline> with </u>
        .replace(/<color:(\w+)>/g, '<span style="color:$1">')								//Replace tag <color:[color name/color hex code] with <span style="color:[color name/color hex code]>
        .replace(/(<\/color>)/g,'</span>')													//Replace tag </color> with </span>
        .replace(/<font:((\w+)((\s*)(\w*))*)>/g, "<span style=\"font-family:'$1'\">")		//Replace tag <font:[font name]> with <span style="font-family:[font name]>
        .replace(/<\/font>/g,'</span>')													//Replace tag </font> with </span>
        .replace(/<size:(\d+)px>/g, "<span style=\"font-size:$1px\">")						//Replace tag <size:[font size]px> with <span style="font-size:[font size]px>
        .replace(/<\/size>/g, '</span>');													//Replace tag </size> with </span>
    console.log(authorInput);
    authorInput = "<html>" + authorInput + "</html>";
    var convertInputToHTMLElem = new DOMParser().parseFromString(authorInput, "text/xml");
    console.log(convertInputToHTMLElem);
    document.getElementById("text2").innerHTML = convertInputToHTMLElem.firstChild.innerHTML;
}