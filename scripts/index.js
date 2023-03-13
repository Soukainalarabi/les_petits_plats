import recipes from "./data/recipes.js"
import cardFactory from "./factories/recipe.js"
let cards = document.querySelector(".cards")
recipes.forEach(recipe => {
    let cardFactoryModel = cardFactory()
    let cardDom = cardFactoryModel.getCardDom()
    cards.appendChild(cardDom)
    console.log(recipe.name);
});
