import buttonFactory from "./factories/dropDown.js"
export default function filterRecipes(recipes) {
    recipes.forEach(res => {
        document.getElementById(`recipe-${res.id}`).style.display = "block"
    })
    let recipesUniqueIngredients = [...new Set(recipes.flatMap(r => r.ingredients).map(i => i.ingredient))]; //il est sensible a la casse
    let recipesUstensils = [...new Set(recipes.flatMap(r => r.ustensils))]; //il est sensible a la casse
    let recipesAppareils = [...new Set(recipes.map(res => res.appliance))];
    showDropDown(recipesUniqueIngredients, recipesUstensils, recipesAppareils, recipes)
}
let showDropDown = (ingredientsParams, appareilsParams, ustensilsParams, recipesParams) => {
    let buttonFactoryModel = buttonFactory(ingredientsParams, appareilsParams, ustensilsParams, recipesParams)
    let ButtonDom = buttonFactoryModel.getButtonDom()
}