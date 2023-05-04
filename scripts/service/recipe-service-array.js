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



//chercher les recipes selon les ingredients,appareils et ustensils selectionnée et les mots saisi par l'usitilsateur dans l'inputGlobal
export let searchRecipes = () => {
    const selectedIngredients = getSelectedIngredients()
    const selectedAppareils = getSelectedAppareils()
    const selectedUstensils = getSelectedUstensils()
    let inputSearch = document.getElementById("contenu-search").value
    return filterRecipesByTagsAndInputSearch(inputSearch, selectedIngredients, selectedAppareils, selectedUstensils)
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

//Recuperer les tags selectionner selon le selector .ingredient-tag,.appareil-tag
//.ustensil-tag
function getSelectedTagsBySelector(selector) {
    let elements = [...document.querySelectorAll(selector)]
    return elements.filter(element => element.textContent)
    .map(element=>element.textContent)
}

export function getSelectedIngredients() {
    return getSelectedTagsBySelector(".ingredient-tag")
}
export function getSelectedAppareils() {
    return getSelectedTagsBySelector(".appareil-tag")
}
export function getSelectedUstensils() {
    return getSelectedTagsBySelector(".ustensil-tag")
}
//filtrer la liste unique des ingredients
export function filterUniqueIngredients(recipeListe) {
    return getUniqueIngredients(recipeListe);
}
//filtrer la liste unique des ustensils
export function filterUniqueUstensils(recipeListe) {
    return getUniqueUstensils(recipeListe);
}
//filtrer la liste unique des appareils
export function filterUniqueAppareils(recipeListe) {
    return getUniqueAppareils(recipeListe)
}
export let findAll = ()  => recipes


export default { searchRecipes, findAll, getSelectedIngredients, getSelectedAppareils, getSelectedUstensils, filterUniqueIngredients, filterUniqueUstensils, filterUniqueAppareils }