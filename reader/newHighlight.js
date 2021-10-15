function newHighlight() {
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
  //If the range spans some text, and inside a tag, set its css class.
  if (range) {
    selectedText.removeAllRanges();
    selectedText.addRange(range);
  }
  document.execCommand("Backcolor", false, "#00ff00");
}
