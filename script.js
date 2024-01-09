var ul = document.getElementById("imagesList");

function createImageItem() {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = "img/imagem0.svg";
  li.appendChild(img);
  console.log(li);
  return li;
}

function imagesList() {
  let numberOfImages = 0;
  ul.innerHTML = "";
  if (window.matchMedia("(max-width: 950px)").matches) {
    numberOfImages = 7;
  } else {
    numberOfImages = 6;
  }
  for (let img = 0; img < numberOfImages; img++) {
    ul.appendChild(createImageItem());
  }
  setImages();
}

function setImages() {
  var image = document.querySelectorAll('[src^="img/imagem"]');

  if (image.length <= 6) {
    image[0].src = "img/imagem1.svg";
    image[1].src = "img/imagem2.svg";
    image[2].src = "img/imagem3.svg";
    image[3].src = "img/imagem4.svg";
    image[4].src = "img/imagem5.svg";
    image[5].src = "img/imagem6.svg";
  } else {
    image[0].src = "img/imagem7.svg";
    image[1].src = "img/imagem8.svg";
    image[2].src = "img/imagem9.svg";
    image[3].src = "img/imagem10.svg";
    image[4].src = "img/imagem11.svg";
    image[5].src = "img/imagem12.svg";
    image[6].src = "img/imagem13.svg";
  }
}

window.addEventListener("DOMContentLoaded", imagesList);
window.addEventListener("resize", imagesList);
