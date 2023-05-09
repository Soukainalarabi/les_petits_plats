import { searchRecipes } from "../../service/recipe-service-array.js";
import showCardsRecipes from "../cards/cardsUtils-array.js";
import tagFactory from "../tag/tagFactory-array.js";
//la création des composants des dropDowns
export function createComponentElements(components, dropBtnComponent, type, dropDownContent) {
    dropDownContent.innerHTML = ""
    components.forEach(component => {
        let componentElement = document.createElement("a")
        dropDownContent.appendChild(componentElement)
        componentElement.textContent = component
        //Lorsqu'on clique sur un element on l'ajoute dans les tags selectionnée et on recherche les recettes suite à la nouvelle liste des tags
        dropBtnComponent.classList.add("hideDropDown-button")
        componentElement.addEventListener("click", () => {
            let tagDom = tagFactory(type, component).getTagDom()
            let groupsTag = document.querySelector(".groups-tag")
            groupsTag.appendChild(tagDom)
            dropBtnComponent.getElementsByTagName("h2")[0].style.display = "block"
            dropBtnComponent.getElementsByTagName("input")[0].style.display = 'none'
            // dropBtnComponent.style.width = "170px"
            dropDownContent.style.display = "none"
            dropDownContent.style.width = "170px"
            dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(0deg)"
            showCardsRecipes(searchRecipes())
        })
    })
}
export function searchInput(inputComponent, components, dropDownContent, dropBtnComponent, type) {
    if (!inputComponent.value) {
        dropDownContent.innerHTML = ""
        createComponentElements(components, dropBtnComponent, type, dropDownContent)
        return
    }
    let filtredComponents = components.filter(component =>
        component.toUpperCase().includes(inputComponent.value.toUpperCase().trim()))
    dropDownContent.innerHTML = ""
    createComponentElements(filtredComponents, dropBtnComponent, type, dropDownContent)
}
///afficher la liste des ingredients , appareils et ustensils
export function showDropDownComponents(components, dropBtnComponent, type, dropDownContent) {
    dropDownContent.innerHTML = ""
    createComponentElements(components, dropBtnComponent, type, dropDownContent)
    dropBtnComponent.getElementsByTagName("h2")[0].style.display = "none"
    dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(180deg)"
    dropBtnComponent.getElementsByTagName("input")[0].style.display = 'block'
    dropDownContent.style.display = "grid"
    dropDownContent.style.gridTemplateColumns = "repeat(3, 1fr)";
    dropBtnComponent.classList.add("dropbtn-responsive")
    dropBtnComponent.classList.remove("hideDropDown-button")
     dropBtnComponent.style.width = "667px"
    dropDownContent.style.width = "667px"
    dropDownContent.style.maxHeight = "397px"
    dropDownContent.style.overflow = "scroll"
    dropDownContent.style.marginTop = "-1%"
}
// Retourner les dropDowns a leur etat initial avant le clique 
export function hideDropDownComponents(dropBtnComponent, dropDownContent) {
    dropBtnComponent.classList.remove("dropbtn-responsive")
    dropBtnComponent.classList.add("hideDropDown-button")
     dropBtnComponent.style.width = "170px"
    dropDownContent.style.display = "none"
    dropDownContent.style.width = "170px"
    dropBtnComponent.getElementsByTagName("input")[0].style.display = 'none'
    dropBtnComponent.getElementsByTagName("h2")[0].style.display = "block"
    dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(0deg)"
}
///La création des dropDowns
export function createDropDownDom() {
    let ingredientsDom = document.querySelector(".dropdown-ingredients")
    let appareilsDom = document.querySelector(".dropdown-appareils")
    let ustensilsDom = document.querySelector(".dropdown-ustensils")
    ingredientsDom.innerHTML = `<button class="dropbtn-ingredients click-ingredients hideDropDown-button">
    <h2 class="title click-ingredients">Ingredients</h2>
    <input class="ingredients-input click-ingredients" type="search" name="" id="search-ingredient"
        placeholder="Rechercher un ingredient">
    <img class="icon-bas-ing click-ingredients" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentA">
</div>`
    appareilsDom.innerHTML = ` <button class="dropbtn-appareils click-appareils hideDropDown-button">
    <h2 class="title click-appareils">Appareils</h2>
    <input class="appareils-input click-appareils" type="search" name="" id="search-appareil"
        placeholder="Rechercher un appareil">

    <img class="icon-bas-app click-appareils" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentB">
</div>`
    ustensilsDom.innerHTML = `<button class="dropbtn-ustensils click-ustensils hideDropDown-button">
    <h2 class="title click-ustensils"> Ustensiles</h2>
    <input class="ustensils-input click-ustensils" type="search" name="" id="search-ustensil"
        placeholder="Rechercher un ustensil">
    <img class="icon-bas-ust click-ustensils" src="assets/dropdown.png" aria-label="icon pour ouvrir le menu déroulant"
        alt="icon vers le bas">
</button>
<div class="dropdown-contentC">

</div>`
}
