const rangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const rangeHandler = () => {
  let range = rangeRef.value;
  spanRef.style.fontSize = range + 'px';
};

rangeRef.addEventListener('input', rangeHandler);
