const ulList = document.querySelector('#categories');
const liList = document.querySelectorAll('.item');
console.log(`В списке ${liList.length} категории.`);

const ulRef = Array.from(document.querySelector('#categories').children);
ulRef.forEach(el => {
  console.log(
    `Категория: ${el.firstElementChild.textContent}\nКоличество: ${el.lastElementChild.children.length}`,
  );
});
