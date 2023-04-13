import cardFactory from "./factories/recipeCard.js"
import { findAllRecipes, filterRecipesByTagsAndInputSearch } from "./service/recipe-service.js"
import { showCardsRecipes } from "./factories/utilsDropDown.js"
import dropDownFactory from "./factories/dropDown.js"
let inputSearch = document.getElementById("contenu-search")
let cards = document.querySelector(".cards")
//effectuer une recherche globale(name,ingredient,description)
inputSearch.addEventListener("keyup", () => {
    showCardsRecipes(filterRecipesByTagsAndInputSearch())
    showDropDown()
})
let showRecipes = () => {
    findAllRecipes().forEach(recipe => {
        let cardFactoryModel = cardFactory(recipe)
        let cardDom = cardFactoryModel.getCardDom()
        cards.appendChild(cardDom)
    });
}
let showDropDown = () => {
    let dropDownFactoryModel = dropDownFactory()
    let ButtonDom = dropDownFactoryModel.getDropDownDom()

}
showDropDown()
showRecipes()


