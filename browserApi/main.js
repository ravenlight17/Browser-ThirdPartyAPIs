import './style.css';

let url = 'https://picsum.photos/v2/list?page=2&limit=100';
let btn = document.getElementById('btn');
let img_div = document.getElementById('img-div');
let div = document.getElementById('app');
let author = document.createElement('span');
let image_id = document.createElement('span');
let img = document.getElementById('img');

btn
  .addEventListener('click', function () {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let pic = data;
        let random_index = Math.floor(Math.random() * 101);

        author.textContent = `Author: ${pic[random_index].author} `;
        div.appendChild(author);
        image_id.textContent = `Image ID: ${pic[random_index].id}`;
        div.appendChild(image_id);

        img.src = `${pic[random_index].download_url}`;
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
