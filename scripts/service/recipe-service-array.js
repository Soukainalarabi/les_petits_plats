import recipes from "../data/recipes.js"
export let filterRecipesByInputSearch = (value) => {
    if (value.trim() && value.length >= 3) {
        return recipes.filter(recipe =>
            recipe.name.toUpperCase().includes(value.toUpperCase().trim()) ||
            recipe.description.toUpperCase().includes(value.toUpperCase().trim()) ||
            recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(value.toUpperCase().trim()))
        );
    }
    return recipes
}
//chercher les recipes selon les ingredients,appareils et ustensils selectionnées et les mots saisi par l'utilisateur
export let filterRecipesByTagsAndInputSearch = (inputSearchValue, selectedIngredients, selectedAppareils, selectedUstensils) => {
    return filterRecipesByTagValue(filterRecipesByInputSearch(inputSearchValue)
        , selectedIngredients, selectedAppareils, selectedUstensils)
}
export let filterRecipesByTagValue = (recipesParams, selectedIngredients, selectedAppareils, selectedUstensils) => {
    return recipesParams.filter(recipe =>
        (!selectedIngredients || selectedIngredients.every(ing => recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(ing.toUpperCase().trim())))) &&
        (!selectedAppareils || selectedAppareils.every(app => recipe.appliance.toUpperCase().trim() == app.toUpperCase().trim())) &&
        (!selectedUstensils || selectedUstensils.every(ust => recipe.ustensils.some(ustensil => ustensil.toUpperCase().includes(ust.toUpperCase().trim()))))
    )
};
export let findAllRecipes = () => recipes
export let getUniqueIngredients = (recipeListe) => [...new Set(recipeListe.flatMap(r => r.ingredients).map(i => i.ingredient))];
export let getUniqueAppareils = (recipeListe) => [...new Set(recipeListe.map(res => res.appliance))];
export let getUniqueUstensils = (recipeListe) => [...new Set(recipeListe.flatMap(r => r.ustensils))];
export default { getUniqueIngredients, getUniqueAppareils, getUniqueUstensils, filterRecipesByTagsAndInputSearch, filterRecipesByInputSearch, findAllRecipes }