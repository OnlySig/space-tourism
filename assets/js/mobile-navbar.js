const btnAbrir = document.querySelector(".amburgerAbrir")
const navBar = document.querySelector(".navList")

btnAbrir.addEventListener("click", _ => {
    navBar.classList.toggle("active")
    navBar.classList[1] === "active" ? btnAbrir.src = "assets/shared/icon-close.svg" : btnAbrir.src = "assets/shared/icon-hamburger.svg"
})
