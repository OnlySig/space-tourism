import { infos } from "./conexao.js"
const planetas = await infos.planetasInfo()
const planetBar = document.querySelectorAll(".destination__item")
const imgPlaneta = document.querySelector(".imgPlaneta")
const titlePlanet = document.querySelector(".title__info")
const textInfo = document.querySelector(".text__info")
const distancia = document.querySelector("#distancia")
const tempo = document.querySelector("#tempo")

planetBar.forEach(element => {
    element.addEventListener("click", e => {
        e.target.classList.add("mb")
        if(e.target.classList[1] === "moon") {
            mudarElementos(e, 1,2,3, "Moon", imgPlaneta, titlePlanet, textInfo, distancia, tempo)
        } else if(e.target.classList[1] === "mars") {
            mudarElementos(e, 0,2,3, "Mars", imgPlaneta, titlePlanet, textInfo, distancia, tempo)
        } else if(e.target.classList[1] === "europa") {
            mudarElementos(e, 0,1,3, "Europa", imgPlaneta, titlePlanet, textInfo, distancia, tempo)
        } else if(e.target.classList[1] === "titan") {
            mudarElementos(e, 0,1,2, "Titan", imgPlaneta, titlePlanet, textInfo, distancia, tempo)
        }
    })
})

function mudarElementos(e, num1, num2, num3, nomePlaneta, imgPlaneta, titlePlaneta, textInfo, distancia, tempo) {
    e.target.parentNode.parentNode.children[num1].children[0].classList.remove('mb')
    e.target.parentNode.parentNode.children[num2].children[0].classList.remove('mb')
    e.target.parentNode.parentNode.children[num3].children[0].classList.remove('mb')

    planetas.forEach(element => {
        const planets = [element]
        const planetaFiltrado = planets.filter(planeta => planeta.name === nomePlaneta)
        if(planetaFiltrado.length > 0) {
            imgPlaneta.src = planetaFiltrado[0].images.webp
            titlePlaneta.innerHTML = planetaFiltrado[0].name
            textInfo.innerHTML = planetaFiltrado[0].description
            distancia.innerHTML = planetaFiltrado[0].distance
            tempo.innerHTML = planetaFiltrado[0].travel
        }
    })
}