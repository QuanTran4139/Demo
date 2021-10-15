function selectFont(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("textContent").style.fontFamily = listValue;
}
