const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const inputHandler = () => {
  if (!inputRef.value) {
    spanRef.textContent = 'незнакомец';
  } else {
    spanRef.textContent = inputRef.value;
  }
};

inputRef.addEventListener('input', inputHandler);
