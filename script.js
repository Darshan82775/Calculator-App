let display = document.getElementById("display");

// Add digit/operator to screen
function append(value) {
  display.value += value;
}

// Clear all
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
