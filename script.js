const ul = document.getElementById("imagesList");
let smallWindowWidthImgCount = 7;
let bigWindowWidthImgCount = 6;

function createImageItem() {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = "img/imagem0.svg";
  li.appendChild(img);
  return li;
}

function generateImages(numberOfImages) {
  ul.innerHTML = "";
  for (let img = 0; img < numberOfImages; img++) {
    ul.appendChild(createImageItem());
  }
  setImages();
}

function imagesList() {
  const numberOfImages = window.matchMedia("(max-width: 900px)").matches
    ? smallWindowWidthImgCount
    : bigWindowWidthImgCount;
  generateImages(numberOfImages);
}

function setImages() {
  const imagesList = document.querySelectorAll('[src^="img/imagem"]');

  imagesList.forEach((img, index) => {
    imagesList.length === 6
      ? (img.src = `img/imagem${index + 1}.svg`)
      : (img.src = `img/imagem${index + smallWindowWidthImgCount}.svg`);
  });
}

function initialize() {
  window.addEventListener("DOMContentLoaded", imagesList);
  window.addEventListener("resize", imagesList);
}

initialize();

// const internalLinks = document.querySelectorAll('a[href^="#"]');

// function handleLink(event) {
//   event.preventDefault();
//   internalLinks.forEach((link) => {
//     link.classList.remove("active");
//   });
//   event.currentTarget.classList.add("active");
// }

// internalLinks.forEach((link) => {
//   link.addEventListener("click", handleLink);
// });
