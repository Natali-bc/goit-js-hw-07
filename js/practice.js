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
