import cardFactory from "./factories/recipeCard.js"
import buttonFactory from "./factories/dropDown.js"
import { findAllRecipes,filterRecipesByTagsAndInputSearch } from "./service/recipe-service.js"
import { showCardsRecipes } from "./factories/utilsDropDown.js"
let inputSearch = document.getElementById("contenu-search")
let cards = document.querySelector(".cards")
//effectuer une recherche globale(name,ingredient,description)
inputSearch.addEventListener("keyup", () => {
    showCardsRecipes(filterRecipesByTagsAndInputSearch())
    showDropDown()
});
let showRecipes = () => {
    findAllRecipes().forEach(recipe => {
        let cardFactoryModel = cardFactory(recipe)
        let cardDom = cardFactoryModel.getCardDom()
        cards.appendChild(cardDom)
    });
}
let showDropDown = () => {
    let buttonFactoryModel = buttonFactory()
    let ButtonDom = buttonFactoryModel.getButtonDom()

}
showDropDown()
showRecipes()


