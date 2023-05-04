import showCardsRecipes from "./factories/cards/cardsUtils-array.js"
import cardFactory from "./factories/cards/recipeCard-array.js"
import dropDownFactory from "./factories/drop-down/dropDown-array.js"
import { findAll, searchRecipes } from "./service/recipe-application-array.js"

let inputSearch = document.getElementById("contenu-search")
let cards = document.querySelector(".cards")
//déclancher la recherche lorsqu'on tape sur le clavier dans inputSearch
inputSearch.addEventListener("keyup", () => {
    // 1 -d'abords on recherche tous les recipes qui correspondes au mots saisi et 
    //les tags
    //2 - afficher les recipes trouvé dans les cards.
    showCardsRecipes(searchRecipes())
    // renitialiser les composents de dropdowns selon les recipes trouvée
    showDropDown()
})
//Afficher  tous les recipes au moment de chargement de la pages
let initShowRecipes = () => {
    findAll().forEach(recipe => {
        let cardFactoryModel = cardFactory(recipe)
        let cardDom = cardFactoryModel.getCardDom()
        cards.appendChild(cardDom)
    });
}
//initialise le dropdow avec tous les recipes au moment de chargement de la pages
let showDropDown = () => {
    let dropDownFactoryModel = dropDownFactory()
    dropDownFactoryModel.getDropDownDom()

}
showDropDown()

initShowRecipes()


