const slider = document.getElementById("slider");

let isDown = false;
let startX;
let scrollLeft;
let velocity = 0;
let momentumID;

function startDragging(e) {
  isDown = true;
  slider.classList.add("dragging");
  cancelMomentum();

  const pageX = e.pageX || (e.touches && e.touches[0].pageX);
  startX = pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function stopDragging() {
  if (!isDown) return;
  isDown = false;
  slider.classList.remove("dragging");
  beginMomentumScroll();
}

function dragging(e) {
  if (!isDown) return;

  e.preventDefault();
  const pageX = e.pageX || (e.touches && e.touches[0].pageX);
  const x = pageX - slider.offsetLeft;
  const walk = x - startX;

  const prevScroll = slider.scrollLeft;
  slider.scrollLeft = scrollLeft - walk;
  velocity = slider.scrollLeft - prevScroll;
}

/* MOMENTUM (scroll inercial) */
function beginMomentumScroll() {
  cancelMomentum();
  momentumID = requestAnimationFrame(momentumLoop);
}

function momentumLoop() {
  slider.scrollLeft += velocity;
  velocity *= 0.95; // desaceleração

  if (Math.abs(velocity) > 0.5) {
    momentumID = requestAnimationFrame(momentumLoop);
  }
}

function cancelMomentum() {
  cancelAnimationFrame(momentumID);
}

/* EVENTOS */
slider.addEventListener("mousedown", startDragging);
slider.addEventListener("touchstart", startDragging);

slider.addEventListener("mousemove", dragging);
slider.addEventListener("touchmove", dragging, { passive: false });

slider.addEventListener("mouseup", stopDragging);
slider.addEventListener("mouseleave", stopDragging);
slider.addEventListener("touchend", stopDragging);
