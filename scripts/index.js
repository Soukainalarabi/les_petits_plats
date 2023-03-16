import recipes from "./data/recipes.js"
import cardFactory from "./factories/recipe.js"
let cards = document.querySelector(".cards")
let inputSearch = document.getElementById("contenu-search")
inputSearch.addEventListener("search", () => {
    let cardElms = document.querySelectorAll(".card")
    if (!inputSearch.value.trim() || inputSearch.value.length < 3) {
        cardElms.forEach(card => {
            card.style.display = "block"
        })
        return
    }//pour ne pas effectuer une recherche si la valeur de input est vide et contient des espace
    cardElms.forEach(card => {
        card.style.display = "none"
    })
    const result = recipes.filter(recipe =>
        recipe.name.toUpperCase().includes(inputSearch.value.toUpperCase().trim()) ||
        recipe.description.toUpperCase().includes(inputSearch.value.toUpperCase().trim()));
    result.forEach(res => {
        document.getElementById(`recipe-${res.id}`).style.display = "block"
    })
});
let showRecipes = () => {
    recipes.forEach(recipe => {
        let cardFactoryModel = cardFactory(recipe)
        let cardDom = cardFactoryModel.getCardDom()
        cards.appendChild(cardDom)

    });

}
showRecipes()


