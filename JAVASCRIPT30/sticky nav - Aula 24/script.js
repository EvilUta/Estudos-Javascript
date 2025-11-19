const navbar = document.querySelector(".navbar");

function updateNav() {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", updateNav);
