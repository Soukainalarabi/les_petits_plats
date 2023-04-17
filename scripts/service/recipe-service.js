import recipes from "../data/recipes.js"
export let filterRecipesByInputSearch = () => {
    let inputSearch = document.getElementById("contenu-search")
    if (inputSearch.value.trim() && inputSearch.value.length >= 3) {
        return recipes.filter(recipe =>
            recipe.name.toUpperCase().includes(inputSearch.value.toUpperCase().trim()) ||
            recipe.description.toUpperCase().includes(inputSearch.value.toUpperCase().trim()) ||
            recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
        );
    }
    return recipes
}
export let filterRecipesByTagsAndInputSearch = () => {
    return filterRecipesByTagValue(filterRecipesByInputSearch())
}
export function getTagIngredientsValue() {
    return [...document.querySelectorAll(".ingredient-tag")].map(e => e.textContent).filter(text => text)
}
export function getTagAppareilsValue() {
    return [...document.querySelectorAll(".appareil-tag")].map(e => e.textContent).filter(text => text)
}
export function getTagUstensilsValue() {
    return [...document.querySelectorAll(".ustensil-tag")].map(e => e.textContent).filter(text => text)
}
export let filterRecipesByTagValue = (recipesParams) => {
    const ingredientValue = getTagIngredientsValue()
    const appareilValue = getTagAppareilsValue()
    const ustensilValue = getTagUstensilsValue()
    console.log(getTagIngredientsValue());
    return recipesParams.filter(recipe =>
        (!ingredientValue || ingredientValue.every(ing => recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(ing.toUpperCase().trim())))) &&
        (!appareilValue || appareilValue.every(app => recipe.appliance.toUpperCase().trim() == app.toUpperCase().trim())) &&
        (!ustensilValue || ustensilValue.every(ust => recipe.ustensils.some(ustensil => ustensil.toUpperCase().includes(ust.toUpperCase().trim()))))
    )
};
export let findAllRecipes = () => recipes
export let getUniqueIngredients = (recipeListe) => [...new Set(recipeListe.flatMap(r => r.ingredients).map(i => i.ingredient))];
export let getUniqueAppareils = (recipeListe) => [...new Set(recipeListe.map(res => res.appliance))];
export let getUniqueUstensils = (recipeListe) => [...new Set(recipeListe.flatMap(r => r.ustensils))];
export default { getUniqueIngredients, getUniqueAppareils, getUniqueUstensils, filterRecipesByTagsAndInputSearch, filterRecipesByInputSearch, findAllRecipes, getTagAppareilsValue, getTagIngredientsValue, getTagUstensilsValue }