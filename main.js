// generate random HEX color
function getHexColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

// set background color style to newly generated color
function setBackground() {
  const backgroundColor = getHexColor();
  document.body.style.background = backgroundColor;
}

// run function on 'space' key press
document.body.onkeyup = function(event) {
  if (event.keyCode === 32) {
    setBackground();
  }
};
