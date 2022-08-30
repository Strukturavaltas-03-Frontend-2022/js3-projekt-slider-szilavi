import { images } from './img.js'

const imgPlace = document.querySelector(".container__slide__img");
const counter = document.querySelector(".img__counter");
const button = Array.from(document.querySelectorAll(".fa-circle"));
const newPicture = document.querySelector(".img__arrows--right");
const previousPicture = document.querySelector(".img__arrows--left");
const caption = document.querySelector(".img__caption");
let i = 0;

let createdImg = `<img class= "actualImg" src="./assets/${images[i].source}" alt="picture"></img>`;

let createdDivToImg = document.createElement('div');

imgPlace.appendChild(createdDivToImg);

createdDivToImg.innerHTML = createdImg;

let actualImg = document.querySelector(".actualImg");

newPicture.addEventListener('click', nextPage);

function nextPage() {
    //  i === images.length -1 ? i = 0 : i++;
    //  console.log(i);
      if (i === images.length -1) {
          i = 0;
      } else i++;

     actualImg.setAttribute("src", `./assets/${images[i].source}`)
     updateAll()
}

previousPicture.addEventListener('click', prevPage);

function prevPage() {
      if (i === 0) {
          i = 3;
      } else i--;

     actualImg.setAttribute("src", `./assets/${images[i].source}`)
     updateAll()
};

function updateAll() {
    counter.innerHTML = `${i+1} / ${images.length}`
    caption.innerHTML = `${images[i].caption}`
}