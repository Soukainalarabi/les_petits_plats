import { filterRecipesByTagsAndInputSearch } from "../service/recipe-service-naive.js"
import showCardsRecipes from "./cardsUtils.js"
import tagFactory from "./tagFactory.js"
export function createComponentElements(components, dropBtnComponent, type, dropDownContent) {
    dropDownContent.innerHTML = ""
    for (const component of components) {
        let componentElement = document.createElement("a")
        dropDownContent.appendChild(componentElement)
        componentElement.textContent = component
        componentElement.addEventListener("click", () => {
            let tagDom = tagFactory(type, component).getTagDom()
            let groupsTag = document.querySelector(".groups-tag")
            groupsTag.appendChild(tagDom)
            dropBtnComponent.getElementsByTagName("h2")[0].style.display = "block"
            dropBtnComponent.getElementsByTagName("input")[0].style.display = 'none'
            dropBtnComponent.style.width = "170px"
            dropDownContent.style.display = "none"
            dropDownContent.style.width = "170px"
            dropDownContent.style.height = "60px"
            dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(0deg)"
            showCardsRecipes(filterRecipesByTagsAndInputSearch())


        })
    }
}
export function searchInput(inputComponent, components, dropDownContent, dropBtnComponent, type) {
    if (!inputComponent.value) {
        dropDownContent.innerHTML = ""
        createComponentElements(components, dropBtnComponent, type, dropDownContent)
        return
    }
    let filtredComponents = () => {
        let arrayComponent = []
        for (const component of components) {
            if (component.toUpperCase().includes(inputComponent.value.toUpperCase().trim())) {
                arrayComponent.push(component)
            }
        }
        return arrayComponent
    }
    dropDownContent.innerHTML = ""
    createComponentElements(filtredComponents, dropBtnComponent, type, dropDownContent)
}
export function showDropDownComponents(components, dropBtnComponent, type, dropDownContent) {
    dropDownContent.innerHTML = ""
    createComponentElements(components, dropBtnComponent, type, dropDownContent)
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
    ingredientsDom.innerHTML = `<button class="dropbtn-ingredients click-ingredients">
    <h2 class="title click-ingredients">Ingredients</h2>
    <input class="ingredients-input click-ingredients" type="search" name="" id="search-ingredient"
        placeholder="Rechercher un ingredient">
    <img class="icon-bas-ing click-ingredients" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentA">
</div>`
    appareilsDom.innerHTML = ` <button class="dropbtn-appareils click-appareils">
    <h2 class="title click-appareils">Appareils</h2>
    <input class="appareils-input click-appareils" type="search" name="" id="search-appareil"
        placeholder="Rechercher un appareil">

    <img class="icon-bas-app click-appareils" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentB">
</div>`
    ustensilsDom.innerHTML = `<button class="dropbtn-ustensils click-ustensils">
    <h2 class="title click-ustensils"> Ustensils</h2>
    <input class="ustensils-input click-ustensils" type="search" name="" id="search-ustensil"
        placeholder="Rechercher un appareil">
    <img class="icon-bas-ust click-ustensils" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentC">

</div>`
}
