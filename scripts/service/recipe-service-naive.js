import recipes from "../data/recipes.js"

//cette fonction vérifie si la liste des ingredients contient le mot saisi
function someIngredient(ingredients, searchString) {
    for (const ingredient of ingredients) {
        if (ingredient.ingredient.toUpperCase().includes(searchString.toUpperCase().trim())) {
            return true
        }
    }
    return false
}
//cette fonction vérifie si la liste des ustentils contient le mot saisi
function someUstentils(ustensils, searchString) {
    for (const ust of ustensils) {
        if (ust.toUpperCase().includes(searchString.toUpperCase().trim())) {
            return true
        }
    }
    return false
}
//chercher les recipes selon les ingredients,appareils et ustensils selectionnée et les mots saisi par l'usitilsateur dans l'inputGlobal
export let searchRecipes = () => {
    const selectedIngredients = getSelectedIngredients()
    const selectedAppareils = getSelectedAppareils()
    const selectedUstensils = getSelectedUstensils()
    let inputSearch = document.getElementById("contenu-search").value
    return filterRecipesByTagsAndInputSearch(inputSearch, selectedIngredients, selectedAppareils, selectedUstensils)
}


//cette fonction filtre les recipes par le mot saisi dans inputSearch
export let filterRecipesByInputSearch = (inputSearch) => {
    let resultFilter = []
    if (inputSearch.trim() && inputSearch.length >= 3) {
        for (const recipe of recipes) {

            if (recipe.name.toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
                recipe.description.toUpperCase().includes(inputSearch.toUpperCase().trim()) || someIngredient(recipe.ingredients, inputSearch)) {
                resultFilter.push(recipe)
            }
        }
        return resultFilter;
    }
    return recipes
}
//chercher les recipes selon les ingredients,appareils et ustensils selectionnées et les mots saisi par l'usitilsatuer
export let filterRecipesByTagsAndInputSearch = (inputSearchValue, selectedIngredients, selectedAppareils, selectedUstensils) => {
    return filterRecipesByTagValue(filterRecipesByInputSearch(inputSearchValue)
        , selectedIngredients, selectedAppareils, selectedUstensils)
}
//cette fonction filtre les recipes par les ingredients , appareils et ustensils selectionnées.
export let filterRecipesByTagValue = (recipesParams, selectedIngredients, selectedAppareils, selectedUstensils) => {
    let result = []
    for (const recipe of recipesParams) {
        // on ajoute que les recipes qui contiennent les ingredients, appareils et ustensils selectionnés.
        if ((!selectedIngredients || everyIngredients(selectedIngredients, recipe)) &&
            (!selectedAppareils || everyAppareils(selectedAppareils, recipe.appliance)) &&
            (!selectedUstensils || everyUstentils(selectedUstensils, recipe))) {
            result.push(recipe)
        }
    }
    return result
}

//cette fonction verifie que le recipe contient tous les ingredients selectionnés
function everyIngredients(selectedIngredients, recipe) {
    for (const ing of selectedIngredients) {
        if (!someIngredient(recipe.ingredients, ing)) {
            return false
        }
    }
    return true
}

//cette fonction vérifie que le recipe  contient tous les ustentils selectionnés
function everyUstentils(ustentils, recipe) {
    for (const ust of ustentils) {
        if (!someUstentils(recipe.ustensils, ust)) {
            return false
        }
    }
    return true
}

//cette fonction vérifie que le recipe  contient tous les appareils selectionnés

function everyAppareils(appareils, appliance) {
    for (const app of appareils) {
        if (appliance.toUpperCase().trim() != app.toUpperCase().trim()) {
            return false
        }
    }
    return true
}



//transformer la liste des recipes en liste unique des ingredients
export function getUniqueIngredients(recipeListe) {
    let result = [];
    for (const element of recipeListe) {
        for (const ingredient of element.ingredients) {
            if (!includesElement(result, ingredient.ingredient)) {
                result.push(ingredient.ingredient);
            }
        }
    }
    return result;
}
//transformer la liste des recipes en liste unique des ustensils
export function getUniqueUstensils(recipeListe) {
    let result = [];
    for (const element of recipeListe) {
        for (const ustensil of element.ustensils) {
            if (!includesElement(result, ustensil)) {
                result.push(ustensil);
            }
        }
    }
    return result;
}
//transformer la liste des recipes en liste unique des appareils
export function getUniqueAppareils(recipeListe) {
    let result = [];
    for (const recipe of recipeListe) {
        if (!includesElement(result, recipe.appliance)) {
            result.push(recipe.appliance);
        }
    }
    return result;
}
//cette fonction vérifie si l'element contien dans la liste
function includesElement(array, searchInclude) {
    for (const element of array) {
        if (element.toUpperCase() == searchInclude.toUpperCase()) {
            return true
        }
    }
    return false
}


//Recuperer les tags selectionner selon le selector .ingredient-tag,.appareil-tag
//.ustensil-tag
function getSelectedTagsBySelector(selector) {
    let results = []
    for (const element of [...document.querySelectorAll(selector)]) {
        if (element.textContent) {
            results.push(element.textContent)
        }
    }
    return results;
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