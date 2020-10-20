const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = ingredients[i];
//   ul.append(li);
// }
const ul = document.querySelector('#ingredients');
ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  ul.append(li);
});

console.log(ul);
