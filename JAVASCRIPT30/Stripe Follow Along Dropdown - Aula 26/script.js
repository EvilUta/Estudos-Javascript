const items = document.querySelectorAll(".menu-item");
const bg = document.querySelector(".dropdown-bg");
const nav = document.querySelector(".nav");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("active");

    const dropdown = item.querySelector(".dropdown");
    const dropRect = dropdown.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const width = dropRect.width;
    const height = dropRect.height;

    const top = dropRect.top - navRect.top;
    const left = dropRect.left - navRect.left;

    bg.classList.add("open");
    bg.style.width = `${width}px`;
    bg.style.height = `${height}px`;
    bg.style.transform = `translate(${left}px, ${top}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
    bg.classList.remove("open");
  });
});
