import { filterRecipesByTagsAndInputSearch } from "../service/recipe-service.js"
export function createComponentElements(components, dropBtnComponent, componentGroupeTag, dropDownContent) {
    dropDownContent.innerHTML = ""
    components.forEach(component => {
        let componentElement = document.createElement("a")
        dropDownContent.appendChild(componentElement)
        componentElement.textContent = component
        componentElement.addEventListener("click", () => {
            componentGroupeTag.getElementsByTagName("h1")[0].textContent = component
            dropBtnComponent.getElementsByTagName("h2")[0].style.display = "block"
            componentGroupeTag.style.display = "flex"
            dropBtnComponent.getElementsByTagName("input")[0].style.display = 'none'
            dropBtnComponent.style.width = "170px"
            dropDownContent.style.display = "none"
            dropDownContent.style.width = "170px"
            dropDownContent.style.height = "60px"
            dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(0deg)"
            showCardsRecipes(filterRecipesByTagsAndInputSearch()
            )
        })
    })
}
export let showCardsRecipes = (recipeListe) => {
    let cardElms = document.querySelectorAll(".card")
    let cards = document.querySelector(".cards")
    let msgErreur = document.getElementById("message-erreur")
    console.log(msgErreur)
    cardElms.forEach(card => {
        card.style.display = "none"
        cards.style.display = "block"
        msgErreur.style.display = "block"
    })
    recipeListe.forEach(res => {
        document.getElementById(`recipe-${res.id}`).style.display = "block"
        msgErreur.style.display = "none"
        cards.style.display = "grid"
    })
}
export function componentGroupeTag(componentGroupeTag) {
    componentGroupeTag.style.display = componentGroupeTag.getElementsByTagName("h1")[0].textContent ? "flex" : "none"
}
export function searchInput(inputComponent, components, dropDownContent, dropBtnComponent, componentGroupeTag) {
    if (!inputComponent.value || inputComponent.value.length < 3) {
        dropDownContent.innerHTML = ""
        createComponentElements(components, dropBtnComponent, componentGroupeTag, dropDownContent)
        return
    }
    let filtredComponents = components.filter(component =>
        component.toUpperCase().includes(inputComponent.value.toUpperCase().trim()))
    dropDownContent.innerHTML = ""

    createComponentElements(filtredComponents, dropBtnComponent, componentGroupeTag, dropDownContent)
}
export function showDropDownComponents(components, dropBtnComponent, componentGroupeTag, dropDownContent) {
    dropDownContent.innerHTML = ""
    createComponentElements(components, dropBtnComponent, componentGroupeTag, dropDownContent)
    dropBtnComponent.getElementsByTagName("h2")[0].style.display = "none"
    dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(180deg)"
    dropBtnComponent.getElementsByTagName("input")[0].style.display = 'block'
    dropDownContent.style.display = "grid"
    dropDownContent.style.gridTemplateColumns = "repeat(3, 1fr)";
    dropBtnComponent.style.width = "667px"
    dropDownContent.style.width = "667px"
    dropDownContent.style.height = "397px"
    dropDownContent.style.overflow = "scroll"
    dropDownContent.style.marginTop = "-1%"
}
export function hideDropDownComponents(dropBtnComponent, dropDownContent) {
    dropBtnComponent.style.width = "170px"
    dropDownContent.style.display = "none"
    dropDownContent.style.width = "170px"
    dropDownContent.style.height = "60px"
    dropBtnComponent.getElementsByTagName("input")[0].style.display = 'none'
    dropBtnComponent.getElementsByTagName("h2")[0].style.display = "block"
    dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(0deg)"
}
export function createDropDownDom() {
    let ingredientsDom = document.querySelector(".dropdown-ingredients")
    let appareilsDom = document.querySelector(".dropdown-appareils")
    let ustensilsDom = document.querySelector(".dropdown-ustensils")
    ingredientsDom.innerHTML = `<button class="dropbtn-ingredients">
    <h2 class="title">Ingredients</h2>
    <input class="ingredients-input" type="search" name="" id="search-ingredient"
        placeholder="Rechercher un ingredient">
    <img class="icon-bas-ing" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentA">
</div>`
    appareilsDom.innerHTML = ` <button class="dropbtn-appareils">
    <h2 class="title">Appareils</h2>
    <input class="appareils-input" type="search" name="" id="search-appareil"
        placeholder="Rechercher un appareil">

    <img class="icon-bas-app" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentB">
</div>`

    ustensilsDom.innerHTML = `<button class="dropbtn-ustensils">
    <h2 class="title"> Ustensils</h2>
    <input class="ustensils-input" type="search" name="" id="search-ustensil"
        placeholder="Rechercher un appareil">
    <img class="icon-bas-ust" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentC">

</div>`
}
export default { createComponentElements, searchInput, showDropDownComponents, hideDropDownComponents, createDropDownDom, componentGroupeTag, showCardsRecipes }
