const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');
ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  ul.append(li);
});

console.log(ul);
