function readChapter() {
    let data = document.getElementById("ChapterName").value;
    let id = document.getElementById("ChapterNumber").value;
    let formData = "<chapter:" +id+ ">" + data +  "</chapter>";
    return formData;
}//get value from Chapter textbox
function insertNewChapter(data) {
    let getText = document.getElementById("text1");
    let AllText = getText.value + data;
    getText.value = AllText;
}//insert readChapter into text editor
function addChapter(){
    let formData = readChapter();
    insertNewChapter(formData);
}//initialize insertNewChapter with data from readChapter


function selectStyle(){
    let e = document.getElementById("s1");
    let Style = e.options[e.selectedIndex].value;
    e.selectedIndex = 0;
    return getStyle(Style);
}//get selected style option
function getStyle(data) {
    // obtain the object reference for the textarea>*/
    let txtarea = document.getElementById("text1");
    // obtain the index of the first selected character
    let start = txtarea.selectionStart;
    // obtain the index of the last selected character
    let finish = txtarea.selectionEnd;
    let allText = txtarea.value;
    // obtain the selected text
    let sel = "";
    for(let i = start;i<finish;i++){
        sel = sel + allText[i];
        console.log(sel);
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
    e.selectedIndex = 0;
    return getAlign(Style);
}//get selected align option
function getAlign(data) {
    // obtain the object reference for the textarea>
    let txtarea = document.getElementById("text1");
    // obtain the index of the first selected character
    let start = txtarea.selectionStart;
    // obtain the index of the last selected character
    let finish = txtarea.selectionEnd;
    console.log(start);
    console.log(finish);
    let allText = txtarea.value;
    // obtain the selected text
    let sel = "";
    for(let i = start;i<finish;i++){
        sel = sel + allText[i];
        console.log(sel);
    }
    //append the text;
    let newText = allText.substring(0, start) +"<a:" +data+">" +sel+"</a>" + allText.substring(parseInt(finish ), allText.length);
    txtarea.value = newText;
}//insert align tag into text editor


function selectSize(){
    let e = document.getElementById("s2");
    let Style = e.options[e.selectedIndex].value;
    e.selectedIndex = 0;
    return getSize(Style);
}//get selected size option
function getSize(data) {
    // obtain the object reference for the textarea>
    let textSize = document.getElementById("text1");
    // obtain the index of the first selected character
    let start = txtarea.selectionStart;
    // obtain the index of the last selected character
    let finish = txtarea.selectionEnd;
    let allText = textSize.value;
    // obtain the selected text
    let sel = "";
    for(let i = start;i<finish;i++){
        sel = sel + allText[i];
        console.log(sel);
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
    e.selectedIndex = 0;
    return getFont(Style);
}//get selected font option
function getFont(data) {
    // obtain the object reference for the textarea>
    let textSize = document.getElementById("text1");
    // obtain the index of the first selected character
    let start = txtarea.selectionStart;
    // obtain the index of the last selected character
    let finish = txtarea.selectionEnd;
    let allText = textSize.value;
    // obtain the selected text
    let sel = "";
    for(let i = start;i<finish;i++){
        sel = sel + allText[i];
        console.log(sel);
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
    e.selectedIndex = 0;
    return getColor(Style);
}//get selected color option
function getColor(data) {
    // obtain the object reference for the textarea>
    let textSize = document.getElementById("text1");
    // obtain the index of the first selected character
    let start = txtarea.selectionStart;
    // obtain the index of the last selected character
    let finish = txtarea.selectionEnd;
    let allText = textSize.value;
    // obtain the selected text
    let sel = "";
    for(let i = start;i<finish;i++){
        sel = sel + allText[i];
        console.log(sel);
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
        .replace(/<size:(\d+)px>/g, "<span class='align' style=\"font-size:$1px\">")						//Replace tag <size:[font size]px> with <span style="font-size:[font size]px>
        .replace(/<\/size>/g, '</span>')													//Replace tag </size> with </span>
        .replace(/<a:(\w+)>/g, "<span class=\"$1\">")                                      //replace tag <a:[text align]> with <align=[text align]>
        .replace(/<\/a>/g, '</span>')                                                      //replace tag </a> with </align>
        .replace(/<footnote:(\d+)>(.*?)<\/footnote>/g, "<a href=\"#source-$1\" id=\"footnote-$1\">" + '[$1]' + "</a>")
        .replace(/<chapter:(\d+)>(.*?)<\/chapter>/g, "<h2 id=\"chapter-$1\">" + 'Chapter $1 - $2' + "</h2>")
        .replace(/\n/g,"<br/>");
    console.log(authorInput);
    authorInput = "<html>" + authorInput + "</html>";
    RenderFootnote(authorInput);
    RenderChapter(authorInput);
    var convertInputToHTMLElem = new DOMParser().parseFromString(authorInput, "text/xml");
    console.log(convertInputToHTMLElem);
    document.getElementById("text2").innerHTML = convertInputToHTMLElem.firstChild.innerHTML;
} //render tags in text editor to HTML tags

function Save(){
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Description = document.getElementById("Description").value;
    let TextInChapter = document.getElementById("text1").value;
    if(Author != "" && Description != "" && TextInChapter != "" && Title != ""){
        console.log(Title,Author,Description,TextInChapter);
    }else if(Author == ""){
        alert("Please input Author");
    }else if(Description ==""){
        alert("Please input Description")
    }else if(Title =="") {
        alert("Please input Title")
    }
}


function AddFootnoteOrChapter(footnoteOrChapter){
    if (footnoteOrChapter == "footnoteNumber")
    {
        var contentBetweenTag = document.getElementById("text1");
        var selectedContent = document.getSelection().toString();
        var startCaret = document.getElementById("text1").selectionStart;
        var endCaret = document.getElementById("text1").selectionEnd;
        var openTag = "<footnote:[replace this with a number and add content between these tags]>";
        var closeTag = "</footnote>";

        contentBetweenTag.value = contentBetweenTag.value.substring(0, startCaret)
            + openTag
            + selectedContent
            + closeTag
            + contentBetweenTag.value.substring(endCaret, contentBetweenTag.value.length);
    }
}//This function is used to add footnote tags


function RenderFootnote(){
    //These 3 lines are used to get the contents of the footnotes and put them into an array called "footnoteContentArray"
    //var footnote = document.getElementById("text1").value;
    if (GetFoonoteContent() != null)
    {
        var replaceContent = GetFoonoteContent();
        var footnoteContentArray = replaceContent.split(",");

        //This for loop is used to create div elements with id according to the id of the footnotes
        var footnoteElem = document.getElementById("footnote");
        footnoteElem.innerHTML = "<hr>";
        var footnoteDiv;
        //for (var i = footnoteContentArray.length; i > 0; i--)
        for (var i = 1; i <= footnoteContentArray.length; i++)
        {
            //This conditional statement is used to check if the element to be created has been created or not.
            //This is used to prevent duplication of elementsvar cnt = i+1;
            if (document.getElementById("source-" + i) == null)
            {
                footnoteDiv = document.createElement("div");
                footnoteDiv.id = "source-" + i;
                footnoteElem.appendChild(footnoteDiv);
                //insertAfter(footnoteElem, footnoteDiv);
            }
        }

        //This loop is used to add the contents of footnotes inside the div element created by the above loop
        for (var i = 0; i < footnoteContentArray.length; i++)
        {
            var cnt = i+1;
            document.getElementById("source-" + cnt).innerHTML = footnoteContentArray[i] + '<a href="#footnote-' + cnt + '">[Back to footnote ' + cnt + ']</a>';
        }
    }
    else
    {
        return;
    }
}//This function is used to render the footnotes


function GetFoonoteContent(){
    var entireInput = document.getElementById("text1").value;
    if (entireInput.match(/<footnote:(\d+)>(.*?)<\/footnote>/g) != null)
    {
        var entireFootnotes = entireInput.match(/<footnote:(\d+)>(.*?)<\/footnote>/g).toString();
        var actualContent = entireFootnotes.replace(/<footnote:(\d+)>(.*?)<\/footnote>/g, '$2');
        console.log(actualContent);

        return actualContent;
    }
    else
    {
        return null;
    }
}//This function is used to get the actual content between the footnote tags


function RenderChapter(){
    //These 3 lines are used to get the contents of the footnotes and put them into an array called "footnoteContentArray"
    //var footnote = document.getElementById("text1").value;
    if (GetChapterContent() != null)
    {
        var replaceContent = GetChapterContent();
        var chapterContentArray = replaceContent.split(",");

        //This for loop is used to create div elements with id according to the id of the footnotes
        var chapterElem = document.getElementById("chapter");
        var chapterDiv;
        for (var i = 1; i <= chapterContentArray.length; i++)
        {
            //This conditional statement is used to check if the element to be created has been created or not.
            //This is used to prevent duplication of elementsvar cnt = i+1;
            if (document.getElementById("chapter-" + i) == null)
            {
                chapterDiv = document.createElement("div");
                chapterDiv.id = "chapter-" + i;
                chapterElem.appendChild(chapterDiv);
            }
            else
            {
                var thisChapterElem = document.getElementById("chapter-" + i);
                thisChapterElem.remove();
                chapterDiv = document.createElement("div");
                chapterDiv.id = "chapter-" + i;
                chapterElem.appendChild(chapterDiv);
            }
        }

        //This loop is used to add the contents of footnotes inside the div element created by the above loop
        for (var i = 0; i < chapterContentArray.length; i++)
        {
            var cnt = i+1;
            //document.getElementById("chapter-" + cnt).innerHTML = chapterContentArray[i] + '<a href="#chapter-' + cnt + '">[Back to footnote ' + cnt + ']</a>';
            document.getElementById("chapter-" + cnt).innerHTML = '<a href="#chapter-' + cnt + '">' + 'Chapter ' + cnt + ' - ' + chapterContentArray[i] + '</a>';
        }
    }
    else
    {
        return;
    }
}//This function is used to render the Chapter


function GetChapterContent(){
    var entireInput = document.getElementById("text1").value;
    if (entireInput.match(/<chapter:(\d+)>(.*?)<\/chapter>/g) != null)
    {
        var entireChapters = entireInput.match(/<chapter:(\d+)>(.*?)<\/chapter>/g).toString();
        var actualContent = entireChapters.replace(/<chapter:(\d+)>(.*?)<\/chapter>/g, '$2');
        console.log(actualContent);

        return actualContent;
    }
    else
    {
        return null;
    }
}//This function is used to get the actual content between the Chapter tags


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}//This function is used to add a new DOM element after a DOM element.
//Taken from: https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib