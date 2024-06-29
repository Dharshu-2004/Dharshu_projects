function clearDisplay() {
  document.getElementById("display").value = "";
}

function displayall(value) {
  document.getElementById("display").value += value;
}

function calculator() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function goToScientific() {
  window.location.href = "scientific.html";
}

function goToStandard() {
  window.location.href = "slider.html";
}
