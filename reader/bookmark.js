var cnt = 0;
function AddBookmark() {
  cnt++;

  //Choose either of these blocks of code to use

  //BLOCK CODE #1
  //Working, DO NOT DELETE (this note is for myself lol)
  /*var sel = window.getSelection();
	var selectedText = sel.toString();
	console.log(selectedText);
	var range = sel.getRangeAt(0).cloneRange();
	var markerTextChar = range.extractContents();

	var markerEl, markerId = "bookmark-" + cnt;
	markerEl = document.createElement("span");
	markerEl.id = markerId;

	markerEl.appendChild(markerTextChar);
	range.insertNode(markerEl);
	
	var tableOfContentElem = document.getElementById("tableOfContent");
	tableOfContentElem.innerHTML += "<a href='#bookmark-" + cnt + "'>" + selectedText + "</a><br>";*/
  //END OF BLOCK CODE #1

  //BLOCK CODE #2
  //Also WORKING, DO NOT DELETE (this note is for myself lol)
  var selectedText = "";
  if (document.getSelection) {
    selectedText = document.getSelection();
  } else if (window.getSelection) {
    selectedText = window.getSelection();
  } else if (document.selection) {
    selectedText = document.selection.createRange().text;
  }

  //Get a the selected content, in a range object
  var range = selectedText.getRangeAt(0);
  var selectedTextStr = range.extractContents();
  //If the range spans some text, and inside a tag, set its css class.
  if (range) {
    var markerEl,
      markerId = "bookmark-" + cnt;
    markerEl = document.createElement("span");
    markerEl.id = markerId;

    markerEl.appendChild(selectedTextStr);

    range.insertNode(markerEl);

    var tableOfContentElem = document.getElementById("tableOfContent");
    tableOfContentElem.innerHTML +=
      "<a href='#bookmark-" + cnt + "'>" + selectedText + "</a><br>";
  }
  //END OF BLOCK CODE 2
}
