const container = document.querySelector(".container");
const inp = document.querySelector("#inp");
let firstN = null;
let secondN = null;
let operator = null;
let reset = false;

function calculate(operator, firstN, secondN) {
  switch (operator) {
    case "+":
      return firstN + secondN;
    case "-":
      return firstN - secondN;
    case "*":
      return firstN * secondN;
    case "/":
      if (secondN === 0) return "Error: Division by zero";
      return firstN / secondN;
    case "%":
      return (firstN * secondN) / 100;
    default:
      return "Error";
  }
}
//AC Function
function clearCalculator() {
  firstN = null;
  secondN = null;
  operator = null;
  inp.value = "";
  reset = false;
}
//DEL Function
function deleteLastDigit() {
  inp.value = inp.value.slice(0, -1);
}

container.addEventListener("click", (e) => {
  const btn = e.target;
  
  // Handle number buttons
  if (btn.classList.contains("number")) {
    if (reset) {
      inp.value = "";
      reset = false;
    }
    inp.value += btn.textContent;
  }
  
  // Handle symbol buttons
  if (btn.classList.contains("symbol")) {
    const symbol = btn.textContent;
    
    // Handle AC and Del
    if (symbol === "AC") {
      clearCalculator();
      return;
    }
    if (symbol === "Del") {
      deleteLastDigit();
      return;
    }
    
    // Handle equals
    if (symbol === "=") {
      if (firstN !== null && operator !== null) {
        secondN = Number(inp.value);
        const result = calculate(operator, firstN, secondN);
        inp.value = result;
        firstN = result;
        secondN = null;
        operator = null;
        reset = true;
      }
      return;
    }
    
    // Handle operators (+, -, *, /, %)
    if (["+", "-", "*", "/", "%"].includes(symbol)) {
      if (firstN === null) {
        firstN = Number(inp.value);
      } else if (secondN === null) {
        secondN = Number(inp.value);
        const result = calculate(operator, firstN, secondN);
        inp.value = result;
        firstN = result;
        secondN = null;
      }
      operator = symbol;
      reset = true;
    }
  }
});
