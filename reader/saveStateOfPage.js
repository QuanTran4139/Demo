window.onload = function () {
  var setStateOnRefresh = document.body.innerHTML;
  setStateOnRefresh = localStorage.getItem("keyEntirePage");
  console.log(setStateOnRefresh);
  if (setStateOnRefresh != null) {
    // document.body.innerHTML = setStateOnRefresh;
  }
};

function SaveCurrentState() {
  console.log("hello");
  localStorage.clear();
  var keyEntirePage = "keyEntirePage";
  var valueEntirePage = document.body.innerHTML;
  localStorage.setItem(keyEntirePage, valueEntirePage);
}

// this function resets the localstorage and thus resets the page back to it's original state.
function reset() {
  localStorage.clear();
  window.location = window.location;
}
