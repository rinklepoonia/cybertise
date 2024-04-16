const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});
// preloder
const Preload = document.getElementById("preload")
setTimeout(() => {
    Preload.classList.add("d-none")
}, "3000");

AOS.init({
    duration: 1200,
})