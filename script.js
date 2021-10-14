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

    //append the text;
    let newText = allText.substring(0, start) +"<" +data+">" +sel+"</"+data+">" + allText.substring(finish, allText.length);
    txtarea.value = newText;

}//insert style tag into text editor


function selectAlign(){
    let e = document.getElementById("s3");
    let Style = e.options[e.selectedIndex].value;
    e.selectedIndex = 0;
    return getAlign(Style);
}//get selected align option
function getAlign(data) {
    var contentBetweenTag = document.getElementById("text1");
    var startCaret = document.getElementById("text1").selectionStart;
    var endCaret = document.getElementById("text1").selectionEnd;

    var lineBreakClosestToStartSelect = contentBetweenTag.value.substring(0, startCaret).lastIndexOf('\n');
    var lineBreakClosestToEndSelect = contentBetweenTag.value.indexOf('\n', endCaret);
    var placeToOpenAlign, placeToCloseAlign;
    console.log(lineBreakClosestToStartSelect);
    console.log(lineBreakClosestToEndSelect);

    if (lineBreakClosestToStartSelect == -1 && lineBreakClosestToEndSelect == -1)
    {
        placeToOpenAlign = -1;
        placeToCloseAlign = contentBetweenTag.value.length;
    }
    else if (lineBreakClosestToStartSelect != -1 && lineBreakClosestToEndSelect == -1)
    {
        placeToOpenAlign = lineBreakClosestToStartSelect;
        placeToCloseAlign = contentBetweenTag.value.length;
    }
    else if (lineBreakClosestToStartSelect == -1 && lineBreakClosestToEndSelect != -1)
    {
        placeToOpenAlign = -1;
        placeToCloseAlign = lineBreakClosestToEndSelect;
    }
    else
    {
        placeToOpenAlign = lineBreakClosestToStartSelect;
        placeToCloseAlign = lineBreakClosestToEndSelect;
    }

    console.log("open at: " + placeToOpenAlign + " close at: " + placeToCloseAlign);
    var openTag = "<a:"+data+">";
    var closeTag = "</a>";

    console.log(contentBetweenTag.value.substring(0, startCaret));
    console.log(contentBetweenTag.value.substring(placeToCloseAlign, contentBetweenTag.value.length));
    contentBetweenTag.value = contentBetweenTag.value.substring(0, placeToOpenAlign + 1)
        + openTag
        + contentBetweenTag.value.substring(placeToOpenAlign + 1, placeToCloseAlign)
        + closeTag
        + contentBetweenTag.value.substring(placeToCloseAlign, contentBetweenTag.value.length);
}

function selectSize(){
    let e = document.getElementById("s2");
    let Style = e.options[e.selectedIndex].value;
    e.selectedIndex = 0;
    return getSize(Style);
}//get selected size option
function getSize(data) {
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
    let newText = allText.substring(0, start) +"<size:" +data+">" +sel+"</a>" + allText.substring(parseInt(finish ), allText.length);
    txtarea.value = newText;
}//insert size tag into text editor


function selectFont(){
    let e = document.getElementById("s4");
    let Style = e.options[e.selectedIndex].value;
    e.selectedIndex = 0;
    return getFont(Style);
}//get selected font option
function getFont(data) {
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
    let newText = allText.substring(0, start) +"<font:" +data+">" +sel+"</a>" + allText.substring(parseInt(finish ), allText.length);
    txtarea.value = newText;
}//insert font tag into text editor


function selectColor(){
    let e = document.getElementById("s5");
    let Style = e.options[e.selectedIndex].value;
    e.selectedIndex = 0;
    return getColor(Style);
}//get selected color option
function getColor(data) {
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
    let newText = allText.substring(0, start) +"<color:" +data+">" +sel+"</a>" + allText.substring(parseInt(finish ), allText.length);
    txtarea.value = newText;
}//insert color tag into text editor


function Render(){
    var authorInput = document.getElementById("text1").value;
    authorInput = authorInput.replace(/<bold[^>]*>/g,'<b>')														//Replace tag <bold> with <b>
        .replace(/<\/bold>/g,'</b>')														//Replace tag </bold> with </b>
        .replace(/<italic[^>]*>/g,'<i>')													//Replace tag <italic> with <i>
        .replace(/<\/italic>/g,'</i>')														//Replace tag </italic> with </i>
        .replace(/<underline[^>]*>/g,'<u>')												//Replace tag <underline> with <u>
        .replace(/<\/underline[^>]*>/g,'</u>')												//Replace tag </underline> with </u>
        .replace(/<color:(\w+)>/g, "<span style=\"color:$1\">")								//Replace tag <color:[color name/color hex code] with <span style="color:[color name/color hex code]>
        .replace(/(<\/color>)/g,'</span>')													//Replace tag </color> with </span>
        .replace(/<font:((\w+)((\s*)(\w*))*)>/g, "<span style=\"font-family:'$1'\">")		//Replace tag <font:[font name]> with <span style="font-family:[font name]>
        .replace(/<\/font>/g,'</span>')													//Replace tag </font> with </span>
        .replace(/<size:(\d+)px>/g, "<span class='align' style=\"font-size:$1px\">")						//Replace tag <size:[font size]px> with <span style="font-size:[font size]px>
        .replace(/<\/size>/g, '</span>')													//Replace tag </size> with </span>
        .replace(/<a:(\w+)>/g, "<span class=\"$1\">")                                      //replace tag <a:[text align]> with <align=[text align]>
        .replace(/<\/a>/g, '</span>')                                                      //replace tag </a> with </align>
        .replace(/<chapter:(\d+)>(.*?)<\/chapter>/g, "<h2 id=\"chapter-$1\">" + 'Chapter $1 - $2' + "</h2>")
        .replace(/\n/g,"<br></br>");
    if (GetFoonoteContent() != null)
    {
        var replaceContent = GetFoonoteContent();
        var footnoteContentArray = replaceContent.split(",");
        console.log("array: " + footnoteContentArray);
        for (var cnt = 1; cnt <= footnoteContentArray.length; cnt++)
        {
            authorInput = authorInput.replace(/<footnote>(.*?)<\/footnote>/, '<a href=\"#source-' + cnt + '"' + ' id=\"footnote-' + cnt + '">' + '[' + cnt  + ']' + '</a>');
        }
    }
    console.log(authorInput);
    authorInput = "<html>" + authorInput + "</html>";
    RenderFootnote(authorInput);
    RenderChapter(authorInput);
    var convertInputToHTMLElem = new DOMParser().parseFromString(authorInput, "text/xml");
    console.log(convertInputToHTMLElem);
    document.getElementById("text2").innerHTML = convertInputToHTMLElem.firstChild.innerHTML;
    GetRenderedContentToTextarea();
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

//This function is used to add footnote or chapter tags
function AddFootnoteOrChapter(footnoteOrChapter){
    if (footnoteOrChapter == "footnoteNumber")
    {
        var contentBetweenTag = document.getElementById("text1");
        var selectedContent = document.getSelection().toString();
        var startCaret = document.getElementById("text1").selectionStart;
        var endCaret = document.getElementById("text1").selectionEnd;
        var openTag = "<footnote>";
        var closeTag = "</footnote>";

        contentBetweenTag.value = contentBetweenTag.value.substring(0, startCaret)
            + openTag
            + selectedContent
            + closeTag
            + contentBetweenTag.value.substring(endCaret, contentBetweenTag.value.length);
    }
    else if (footnoteOrChapter == "chapterNumber")
    {
        var contentBetweenTag = document.getElementById("text1");
        var selectedContent = document.getSelection().toString();
        var startCaret = document.getElementById("text1").selectionStart;
        var endCaret = document.getElementById("text1").selectionEnd;
        var openTag = "<chapter:[replace this with a chapter number and add chapter content between these tags]>";
        var closeTag = "</chapter>";

        contentBetweenTag.value = contentBetweenTag.value.substring(0, startCaret)
            + openTag
            + selectedContent
            + closeTag
            + contentBetweenTag.value.substring(endCaret, contentBetweenTag.value.length);
    }
}

//This function is used to render the footnotes
function RenderFootnote(){
    //These 2 lines are used to reset the footnote div element in the HTML file
    var footnoteElem = document.getElementById("footnote");
    footnoteElem.innerHTML = "<hr>";

    //The conditional statement here is to check if there are any footnotes in the input box or not
    if (GetFoonoteContent() != null)
    {
        //These 2 lines are used to put the contents of the footnotes into an array called "footnoteContentArray"
        var replaceContent = GetFoonoteContent();
        var footnoteContentArray = replaceContent.split(",");

        //This for loop is used to create div child elements inside the footnote div element in the HTML file
        var footnoteDiv;
        for (var i = 1; i <= footnoteContentArray.length; i++)
        {
            //This conditional statement is used to check if the footnote and its content has existed or not.
            //If not, then we will create it.
            if (document.getElementById("source-" + i) == null)
            {
                footnoteDiv = document.createElement("div");
                footnoteDiv.id = "source-" + i;
                footnoteElem.appendChild(footnoteDiv);
            }
        }

        //This for loop is used to add the actual content into the footnote.
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
}

//This function is used to get the actual content between the footnote tags
function GetFoonoteContent(){
    var entireInput = document.getElementById("text1").value;
    if (entireInput.match(/<footnote>(.*?)<\/footnote>/g) != null)
    {
        var entireFootnotes = entireInput.match(/<footnote>(.*?)<\/footnote>/g).toString();
        var actualContent = entireFootnotes.replace(/<footnote>(.*?)<\/footnote>/g, '$1');
        console.log(actualContent);

        return actualContent;
    }
    else
    {
        return null;
    }
}
/*function GetFoonoteContent()
{
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
}*/

//This function is used to render the chapters
function RenderChapter(){
    //These 2 lines are used to reset the chapter div element in the HTML file
    var chapterElem = document.getElementById("chapter");
    chapterElem.innerHTML = '';

    //The conditional statement here is to check if there are any chapters in the input box or not
    if (GetChapterContent() != null)
    {
        //These 2 lines are used to put the chapters' names into an array called "chapterContentArray"
        var replaceContent = GetChapterContent();
        var chapterContentArray = replaceContent.split(",");

        //This for loop is used to create div child elements inside the chapter div element in the HTML file
        var chapterDiv;
        for (var i = 1; i <= chapterContentArray.length; i++)
        {
            //This conditional statement is used to check if the chapter and its content has existed or not.
            //If not, then we will create it.
            if(document.getElementById("goToChapter-" + i) == null)
            {
                chapterDiv = document.createElement("div");
                chapterDiv.id = "goToChapter-" + i;
                chapterElem.appendChild(chapterDiv);
            }
        }

        //This for loop is used to add the actual content into the chapter in the "Table of contents".
        for (var i = 0; i < chapterContentArray.length; i++)
        {
            var cnt = i+1;
            console.log("cnt = " + cnt);
            document.getElementById("goToChapter-" + cnt).innerHTML = '<a href="#chapter-' + cnt + '">' + 'Chapter ' + cnt + ' - ' + chapterContentArray[i] + '</a>';
        }
    }
    else
    {
        return;
    }
}

//This function is used to get the actual content between the chapter tags
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
}

//This function is used to add a new DOM element after a DOM element.
//Taken from: https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function GetRenderedContentToTextarea(){
    document.getElementById("outputHidden").value = document.getElementById("renderedOutputHidden").innerHTML;
    console.log(document.getElementById("outputHidden").value);
}