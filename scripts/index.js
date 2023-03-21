import recipes from "./data/recipes.js"
import cardFactory from "./factories/recipeCard.js"
import buttonFactory from "./factories/dropDown.js"
let cards = document.querySelector(".cards")
let dropDowns = document.querySelector(".dropdowns")
let inputSearch = document.getElementById("contenu-search")
let testArray = recipes.flatMap(r => r.ingredients)
let uniqueIngredients = [...new Set(testArray.map(i => i.ingredient))]; //il est sensible a la casse
//effectuer une recherche globale(name,ingredient,description)
inputSearch.addEventListener("search", () => {
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
        let cardFactoryModel = cardFactory(recipe, uniqueIngredients,)
        let cardDom = cardFactoryModel.getCardDom()
        cards.appendChild(cardDom)

    });
}
let showDropDown = () => {

    let buttonFactoryModel = buttonFactory(uniqueIngredients, [], [])
    let ButtonDom = buttonFactoryModel.getButtonDom()
    // dropDowns.appendChild(ButtonDom)





}
showDropDown()
showRecipes()


