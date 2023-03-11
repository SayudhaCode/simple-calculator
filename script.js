let result = document.getElementById("result");

function insertDigit(digit) {
  if (result.textContent === "0") {
    result.textContent = digit;
  } else {
    result.textContent += digit;
  }
}

function insertOperator(operator) {
  result.textContent += operator;
}

function clearResult() {
  result.textContent = "0";
}

function deleteDigit() {
  result.textContent = result.textContent.slice(0, -1);
  if (result.textContent === "") {
    result.textContent = "0";
  }
}

function calculateResult() {
  try {
    result.textContent = eval(result.textContent);
  } catch (e) {
    result.textContent = "Error";
  }
}
