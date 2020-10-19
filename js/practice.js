// 2) Дан список в штмл. Вставьте в него 3 лишки с текстом

// const ul = document.querySelector('ul');
// const arr = ['Hello USA', 'Hello France', 'Hello Ukraine'];
// for (let i = 0; i < 3; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = arr[i];
//   ul.append(li);
// }

// ________________________________________________________
// 3)Создайте 5 красных кругов 100х100 пикселей
// (стили подключаються в цсс)

// const body = document.querySelector('body');
// for (let i = 0; i < 5; i += 1) {
//   const div = document.createElement('div');
//   div.classList.add('circle');
//   body.append(div);
// }

// 4)Добавьте всем дивам нумерацию (в свойство текс контент записывается какой это по счёту див)

// const divList = document.querySelectorAll('div');
// divList.forEach((el, i) => {
//   el.textContent = `${i + 1}`;
// });

// 5)Создайте 3 картинки с котиками за одно операцию

// const body = document.querySelector('body');

// for (let i = 0; i < 3; i += 1) {
//   const img = document.createElement('img');
//   body.append(img);
//   let random = Math.floor(Math.random() * 200);
//   img.src = `https://picsum.photos/id/${random}/200/300`;
// }
// _____________________________________________________

// const body = document.querySelector('body');
// body.addEventListener('click', ev => {
//   ev.currentTarget.classList.toggle('green');
// });

// const check = document.querySelector('.check');
// console.log(check.checked);
// check.addEventListener('click', ev => {
//   if (ev.target.checked) {
//     body.style.background = 'blue';
//     body.style.color = 'yellow';
//   } else {
//     body.style.background = 'yellow';
//     body.style.color = 'blue';
//   }
// });

// const h1 = document.createElement('h1');
// body.append(h1);
// h1.textContent = 'Hello Ukraine';
// console.log(h1);
// body.style.backgroundColor = 'red';

// _________________________________________________

// const arrowLeft = document.querySelector('.left');
// const arrowRight = document.querySelector('.right');
// const ball = document.querySelector('.circle');
// const box = document.querySelector('.container');

// let x = 0;
// box.addEventListener('click', ev => {
//   if (ev.target === arrowLeft) {
//     x -= 10;
//     ball.style.transform = `translateX(${x}px)`;
//   } else if (ev.target === arrowRight) {
//     x += 10;
//     ball.style.transform = `translateX(-${x}px)`;
//   }
// });

// _____________________________________________________

// const body = document.querySelector('body');
// const form = document.querySelector('.form');
// const name = document.querySelector('.name');
// const surname = document.querySelector('.surname');
// const range = document.querySelector('.range');

// form.addEventListener('submit', ev => {
//   ev.preventDefault();
//   body.insertAdjacentHTML(
//     'beforeend',
//     `<h1 style = "font-size: ${range.value}px; transition: .2s" class="output" > Name: ${name.value}, Surname ${surname.value}</h1>`,
//   );
// });
// range.addEventListener('input', ev => {
//   const output = document.querySelectorAll('.output');
//   // output ? (output.style.fontSize = `${range.value}px`) : '';
//   output
// ? output.forEach(el => {
//         el.style.fontSize = `${range.value}px`;
//       })
//     : '';
// });
// ______________________________________________
// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll event handler invocation every 300ms.');
//   }, 300),
// );

// window.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     console.log('Scroll event handler invocation every 300ms.');
//   }, 300),
// );

// ____________________________________________
//1) Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.
// Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
// Это должно работать и для вновь добавленных li.
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
