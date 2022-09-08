const hamburger = document.querySelector(".hamburger");
const linkGroup = document.querySelector(".link-group");
const butt = document.getElementById("project");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  linkGroup.classList.toggle("active");
});

const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

let activeLink = 0;

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    if (activeLink != i) {
      links[activeLink].classList.remove("active");
      link.classList.add("active");
      sections[activeLink].classList.remove("active");

      setTimeout(() => {
        activeLink = i;
        sections[i].classList.add("active");
      }, 1000);
    }
  });
});

const hideLinkGroup = () => {
  const menuBars = document.querySelector(".active");
  if (window.innerWidth <= 768 && menuBars) {
    hamburger.classList.toggle("is-active");
    linkGroup.classList.toggle("active");
  }
};

linkGroup.addEventListener("click", hideLinkGroup);

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let msgInput = document.getElementById("msg");

function input() {
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("msg", msgInput.value);
}
