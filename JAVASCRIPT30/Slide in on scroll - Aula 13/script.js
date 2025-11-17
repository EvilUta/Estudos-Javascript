function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".slide-in");

function checkSlide() {
  images.forEach(img => {
    const imgHalf = img.offsetTop + img.height / 2;
    const scrollBottom = window.scrollY + window.innerHeight;

    const isHalfShown = scrollBottom > imgHalf;
    const isNotScrolledPast = window.scrollY < img.offsetTop + img.height;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
checkSlide(); // aplica ao carregar
