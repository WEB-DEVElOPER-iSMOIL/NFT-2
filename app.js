const closeBtn = document.querySelector(".close-menu");
const openBtn = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".navlist");

openBtn.addEventListener("click", () => {
    navList.classList.add("active-nav")
})

closeBtn.addEventListener("click", () => {
    navList.classList.remove("active-nav")
})