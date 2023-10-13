const btnMenu = document.querySelector(".amburgerAbrir")
const btnMenuFechar = document.querySelector(".amburgerFechar")

btnMenu.addEventListener("click", e => {
    e.target.nextElementSibling.classList.add("active")
    e.target.classList.add("off")
})

btnMenuFechar.addEventListener("click", e => {
    e.target.parentNode.parentNode.classList.remove("active")
    btnMenu.classList.remove("off")
})