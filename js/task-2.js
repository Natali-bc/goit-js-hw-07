const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('ul#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  ul.append(li);
}
