function Render() {
  var authorInput = document.getElementById("textContent").value;
  authorInput = authorInput
    .replace(/<bold[^>]*>/g, "<b>") //Replace tag <bold> with <b>
    .replace(/<\/bold>/g, "</b>") //Replace tag </bold> with </b>
    .replace(/<italic[^>]*>/g, "<i>") //Replace tag <italic> with <i>
    .replace(/<\/italic>/g, "</i>") //Replace tag </italic> with </i>
    .replace(/<underline[^>]*>/g, "<u>") //Replace tag <underline> with <u>
    .replace(/<\/underline[^>]*>/g, "</u>") //Replace tag </underline> with </u>
    .replace(/<color:(\w+)>/g, '<span style="color:$1">') //Replace tag <color:[color name/color hex code] with <span style="color:[color name/color hex code]>
    .replace(/(<\/color>)/g, "</span>") //Replace tag </color> with </span>
    .replace(
      /<font:((\w+)((\s*)(\w*))*)>/g,
      "<span style=\"font-family:'$1'\">"
    ) //Replace tag <font:[font name]> with <span style="font-family:[font name]>
    .replace(/<\/font>/g, "</span>") //Replace tag </font> with </span>
    .replace(/<size:(\d+)px>/g, '<span style="font-size:$1px">') //Replace tag <size:[font size]px> with <span style="font-size:[font size]px>
    .replace(/<\/size>/g, "</span>"); //Replace tag </size> with </span>
  console.log(authorInput);
  authorInput = "<html>" + authorInput + "</html>";
  var convertInputToHTMLElem = new DOMParser().parseFromString(
    authorInput,
    "text/xml"
  );
  console.log(convertInputToHTMLElem);
  document.getElementById("text2").innerHTML =
    convertInputToHTMLElem.firstChild.innerHTML;
}
