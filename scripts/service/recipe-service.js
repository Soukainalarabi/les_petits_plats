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
export let filterRecipesByTagValue = (recipesParams) => {
    const ingredientValue = document.querySelector(".ingredient-groupe-tag").getElementsByTagName("h1")[0].textContent
    const appareilValue = document.querySelector(".appareil-groupe-tag").getElementsByTagName("h1")[0].textContent
    const ustensilValue = document.querySelector(".ustensil-groupe-tag").getElementsByTagName("h1")[0].textContent
    return recipesParams.filter(recipe =>
        (!ingredientValue || recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(ingredientValue.toUpperCase().trim()))) && (!appareilValue ||
            recipe.appliance.toUpperCase().trim() == appareilValue.toUpperCase().trim()) && (!ustensilValue ||
                recipe.ustensils.some(ustensil => ustensil.toUpperCase().includes(ustensilValue.toUpperCase().trim())))
    )
};
export let findAllRecipes=()=>recipes
export let getUniqueIngredients = (recipeListe) => [...new Set(recipeListe.flatMap(r => r.ingredients).map(i => i.ingredient))];
export let getUniqueAppareils = (recipeListe) => [...new Set(recipeListe.map(res => res.appliance))];
export let getUniqueUstensils = (recipeListe) => [...new Set(recipeListe.flatMap(r => r.ustensils))];
export default { getUniqueIngredients, getUniqueAppareils, getUniqueUstensils, filterRecipesByTagsAndInputSearch, filterRecipesByInputSearch,findAllRecipes }