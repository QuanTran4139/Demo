function zoom(id) {
  var textContent = document.getElementById("textContent");

  let rootFontSize = parseFloat(
    window.getComputedStyle(textContent, null).getPropertyValue("font-size")
  );
  console.log("Root font size " + rootFontSize);
  if (id === "zoomIn") {
    rootFontSize = rootFontSize + 2;
  }
  if (id === "zoomOut" && rootFontSize > 10) {
    rootFontSize = rootFontSize - 2;
  }
  textContent.style.fontSize = `${rootFontSize}px`;
  //console.log("Root font size after " + rootFontSize);
}
