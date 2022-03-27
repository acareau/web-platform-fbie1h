let sizeMultiplier, buttonSize, pageHeight, pageWidth;
let value = 1;

function setSize() {
  sizeMultiplier = 1;
  buttonSize = 50;
  document.getElementById('button').innerHTML = value;
  document.getElementById('button').style.height = buttonSize;
  document.getElementById('button').style.width = buttonSize;
}

function changeSize() {
  value++;
  sizeMultiplier++;
  buttonSize = 50 * sizeMultiplier;
  document.getElementById('button').style.height = buttonSize;
  document.getElementById('button').style.width = buttonSize;
  document.getElementById('button').innerHTML = value;
  pageHeight = document.getElementById('page').clientHeight;
  pageWidth = document.getElementById('page').clientWidth;
  if (buttonSize > pageHeight || buttonSize > pageWidth) setSize();
}
