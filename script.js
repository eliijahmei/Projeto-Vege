const ul = document.getElementById("imagesList");
const accordionList = document.querySelectorAll(".js-accordion dt");
const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
const sections = document.querySelectorAll(".js-scroll");

let bigWindowWidthImgCount = 6;
let smallWindowWidthImgCount = 7;

function generateImagesList() {
  ul.innerHTML = "";

  const numberOfImages = window.matchMedia("(max-width: 950px)").matches
    ? smallWindowWidthImgCount
    : bigWindowWidthImgCount;

  for (let img = 0; img < numberOfImages; img++) {
    ul.appendChild(createLiList());
  }

  function createLiList() {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = "img/imageDefault.svg";
    li.appendChild(img);
    return li;
  }
  function setImages() {
    const imagesList = document.querySelectorAll('[src^="img/image"]');

    imagesList.forEach((img, index) => {
      imagesList.length === bigWindowWidthImgCount
        ? (img.src = `img/image${index + 1}.svg`)
        : (img.src = `img/image${index + smallWindowWidthImgCount}.svg`);
    });
  }

  setImages();
}
function showOrHideQuestion() {
  const activeClass = "active";

  if (accordionList.length) {
    accordionList[0].classList.toggle(activeClass);
    accordionList[0].nextElementSibling.classList.toggle(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
function sessionNavigation() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function initialize() {
  window.addEventListener("DOMContentLoaded", sessionNavigation);
  window.addEventListener("DOMContentLoaded", generateImagesList);
  window.addEventListener("DOMContentLoaded", showOrHideQuestion);
  window.addEventListener("resize", generateImagesList);
}

initialize();

// event.preventDefault();
// function handleLink(event) {
//   internalLinks.forEach((link) => {
//     link.classList.remove("active");
//   });
//   event.currentTarget.classList.add("active");
// }

// internalLinks.forEach((link) => {
//   link.addEventListener("click", handleLink);
// });
