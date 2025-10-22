const display = document.getElementById('display');

// Calculator functions
function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendDot() {
  if (!display.value.endsWith('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

window.addEventListener('load', () => {
  // Splash screen fade-out
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
  }, 3000);

  // Attach click events to buttons
  const buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (value >= '0' && value <= '9') {
        appendNumber(value);
      } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        appendOperator(value);
      } else if (value === '.') {
        appendDot();
      } else if (value === 'C') {
        clearDisplay();
      } else if (value === 'DEL') {
        deleteLast();
      } else if (value === '=') {
        calculateResult();
      }
    });
  });
});