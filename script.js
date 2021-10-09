function readChapter() {
    let data = document.getElementById("ChapterName").value;
    let id = document.getElementById("ChapterNumber").value;
    let formData = "<chapter" +id+ ":" +data+ "/>" + "<size:35px" + ">" + "<bold" + ">" + data +  "</bold></size>";
    return formData;
}//get value from Chapter textbox
function insertNewChapter(data) {
    let textEdit = document.getElementById("text1");
    textEdit.innerHTML += (data);
}//insert readChapter into text editor
function addChapter(){
    let formData = readChapter();
    insertNewChapter(formData);
}//initialize insertNewChapter with data from readChapter
function selectStyle(){
    let e = document.getElementById("s1");
    let Style = e.options[e.selectedIndex].value;
    return getStyle(Style);
}//get selected style option
function getStyle(data) {
    // obtain the object reference for the textarea>*/
    let txtarea = document.getElementById("text1");
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

}//insert style tag into text editor
function selectAlign(){
    let e = document.getElementById("s3");
    let Style = e.options[e.selectedIndex].value;
    return getAlign(Style);
}//get selected align option
function getAlign(data) {
    // obtain the object reference for the textarea>
    let txtarea = document.getElementById("text1");
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
    let newText = allText.substring(0, startInt) +"<a:" +data+">" +sel+"</a>" + allText.substring(finishInt, allText.length);
    txtarea.value = newText;
}//insert align tag into text editor
function selectSize(){
    let e = document.getElementById("s2");
    let Style = e.options[e.selectedIndex].value;
    return getSize(Style);
}//get selected size option
function getSize(data) {
    // obtain the object reference for the textarea>
    let textSize = document.getElementById("text1");
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
    let newText = allText.substring(0, startInt) +"<size:" +data+">" +sel+ "</size>" + allText.substring(finishInt, allText.length);
    textSize.value = newText;
}//insert size tag into text editor
function selectFont(){
    let e = document.getElementById("s4");
    let Style = e.options[e.selectedIndex].value;
    console.log(Style);
    return getFont(Style);
}//get selected font option
function getFont(data) {
    // obtain the object reference for the textarea>
    let textSize = document.getElementById("text1");
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
    let newText = allText.substring(0, startInt) +"<font:" +data+">" +sel+ "</font>" + allText.substring(finishInt, allText.length);
    textSize.value = newText;
}//insert font tag into text editor
function selectColor(){
    let e = document.getElementById("s5");
    let Style = e.options[e.selectedIndex].value;
    console.log(Style);
    return getColor(Style);
}//get selected color option
function getColor(data) {
    // obtain the object reference for the textarea>
    let textSize = document.getElementById("text1");
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
    let newText = allText.substring(0, startInt) +"<color:" +data+">" +sel+ "</color>" + allText.substring(finishInt, allText.length);
    textSize.value = newText;
}//insert color tag into text editor
function Render(){
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
        .replace(/<\/size>/g, '</span>')													//Replace tag </size> with </span>
        .replace(/<a:(\w+)>/g, "<p align=\"$1\">")                                      //replace tag <a:[text align]> with <align=[text align]>
        .replace(/<\/a>/g, '</p>')                                                      //replace tag </a> with </align>
        .replace(/<chapter(\w+):((\s*)(\w*))>/g,"<span id=\"$1\" class=\"$2\">")
        .replace(/<\/chapter>/g, '</span>')
    console.log(authorInput);
    authorInput = "<html>" + authorInput + "</html>";
    var convertInputToHTMLElem = new DOMParser().parseFromString(authorInput, "text/xml");
    console.log(convertInputToHTMLElem);
    document.getElementById("text2").innerHTML = convertInputToHTMLElem.firstChild.innerHTML;
} //render tags in text editor to HTML tags
function Save(){
    let Author = document.getElementById("Author").value;
    let Description = document.getElementById("Description").value;
    let ChapterName = document.getElementById("ChapterName").value;
    let ChapterNumber = document.getElementById("ChapterNumber").value;
    let TextInChapter = document.getElementById("text1").value;
    if(Author != "" && Description != "" && ChapterName != "" && ChapterNumber != "" && TextInChapter != ""){
        console.log(Author,Description,ChapterName,ChapterNumber,TextInChapter);
    }
    else{
        alert("Please fill in all the required(*)");
    }
}