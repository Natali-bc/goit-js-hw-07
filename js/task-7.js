const rangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const rangeHandler = event => {
  let range = rangeRef.value;
  spanRef.style.fontSize = range + 'px';
};

rangeRef.addEventListener('input', rangeHandler);
