function selectSize(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("textContent").style.fontSize = listValue;
}
