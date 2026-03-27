const addImg = document.querySelector("img");

const img = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const randomIndex = Math.floor(Math.random() * img.length);

addImg.src = "images/" + img[randomIndex];
