import recipes from "./data/recipes.js"
import cardFactory from "./factories/recipeCard.js"
import buttonFactory from "./factories/dropDown.js"
let cards = document.querySelector(".cards")
let inputSearch = document.getElementById("contenu-search")
let inputIngredient = document.querySelector(".ingredients-tag")

let uniqueIngredients = [...new Set(recipes.flatMap(r => r.ingredients).map(i => i.ingredient))]; //il est sensible a la casse
let ustensils = [...new Set(recipes.flatMap(r => r.ustensils))]; //il est sensible a la casse
let appareils = [...new Set(recipes.map(res => res.appliance))];

//effectuer une recherche globale(name,ingredient,description)
inputSearch.addEventListener("keyup", () => {
    let cardElms = document.querySelectorAll(".card")
    //pour ne pas effectuer une recherche si la valeur de input est vide ,contient des espace et superieur a trois caracteres 
    if (!inputSearch.value.trim() || inputSearch.value.length < 3) {
        cardElms.forEach(card => {
            card.style.display = "block"
        })
        return
    }

    cardElms.forEach(card => {
        card.style.display = "none"
    })
    const result = recipes.filter(recipe =>
        recipe.name.toUpperCase().includes(inputSearch.value.toUpperCase().trim()) ||
        recipe.description.toUpperCase().includes(inputSearch.value.toUpperCase().trim()) ||
        recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
    );

    result.forEach(res => {
        document.getElementById(`recipe-${res.id}`).style.display = "block"
    })
});

let showRecipes = () => {
    recipes.forEach(recipe => {
        let cardFactoryModel = cardFactory(recipe, uniqueIngredients)
        let cardDom = cardFactoryModel.getCardDom()
        cards.appendChild(cardDom)

    });
}
let showDropDown = () => {

    let buttonFactoryModel = buttonFactory(uniqueIngredients, appareils, ustensils, recipes)
    let ButtonDom = buttonFactoryModel.getButtonDom()
    // dropDowns.appendChild(ButtonDom)





}
showDropDown()
showRecipes()


