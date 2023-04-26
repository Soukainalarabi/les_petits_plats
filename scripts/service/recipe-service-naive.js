import recipes from "../data/recipes.js"
function someIngredient(ingredients, searchString) {
    for (const ingredient of ingredients) {
        console.log('herre');
        if (ingredient.ingredient.toUpperCase().includes(searchString.toUpperCase().trim())) {
            return true
        }
    }
    return false
}

function someUstentils(ustensils, searchString) {
    for (const ust of ustensils) {
        if (ust.toUpperCase().includes(searchString.toUpperCase().trim())) {
            return true
        }
    }
    return false
}
export let filterRecipesByInputSearch = () => {
    let inputSearch = document.getElementById("contenu-search")
    let resultFilter = []
    if (inputSearch.value.trim() && inputSearch.value.length >= 3) {
        for (const recipe of recipes) {
            console.log('recipe');

            if (recipe.name.toUpperCase().includes(inputSearch.value.toUpperCase().trim()) ||
                recipe.description.toUpperCase().includes(inputSearch.value.toUpperCase().trim()) || someIngredient(recipe.ingredients, inputSearch.value)) {
                resultFilter.push(recipe)
            }
        }
        return resultFilter;
    }
    return recipes
}
export let filterRecipesByTagsAndInputSearch = () => {
    return filterRecipesByTagValue(filterRecipesByInputSearch())
}
function getTagValue(selector) {
    let results = []
    for (const element of [...document.querySelectorAll(selector)]) {
        if (element.textContent) {
            results.push(element.textContent)
        }
    }
    return results;
}
export function getTagIngredientsValue() {
    return getTagValue(".ingredient-tag")
}
export function getTagAppareilsValue() {
    return getTagValue(".appareil-tag")
}
export function getTagUstensilsValue() {
    return getTagValue(".ustensil-tag")
}

export let filterRecipesByTagValue = (recipesParams) => {
    const ingredientsValue = getTagIngredientsValue()
    const appareilsValue = getTagAppareilsValue()
    const ustensilsValue = getTagUstensilsValue()
    let result = []
    for (const recipe of recipesParams) {
        if ((!ingredientsValue || everyIngredients(ingredientsValue, recipe)) &&
            (!appareilsValue || everyAppareils(appareilsValue, recipe.appliance)) &&
            (!ustensilsValue || everyUstentils(ustensilsValue, recipe))) {
            result.push(recipe)
        }
    }
    return result
};
function everyIngredients(ingredients, recipe) {
    for (const ing of ingredients) {
        if (!someIngredient(recipe.ingredients, ing)) {
            return false
        }
    }
    return true
}

function everyUstentils(ustentils, recipe) {
    for (const ust of ustentils) {
        if (!someUstentils(recipe.ustensils, ust)) {
            return false
        }
    }
    return true
}

function everyAppareils(appareils, appliance) {
    for (const app of appareils) {
        if (appliance?.toUpperCase().trim() != app?.toUpperCase().trim()) {
            return false
        }
    }
    return true
}



export let findAllRecipes = () => recipes


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
export function getUniqueAppareils(recipeListe) {
    let result = [];
    for (const recipe of recipeListe) {
        if (!includesElement(result, recipe.appliance)) {
            result.push(recipe.appliance);
        }

    }
    console.log(result)

    return result;

}
function includesElement(array, searchInclude) {
    for (const element of array) {
        if (element?.toUpperCase() == searchInclude?.toUpperCase()) {
            return true
        }
    }
    return false
}


export default { getUniqueIngredients, getUniqueAppareils, getUniqueUstensils, filterRecipesByTagsAndInputSearch, filterRecipesByInputSearch, findAllRecipes, getTagAppareilsValue, getTagIngredientsValue, getTagUstensilsValue }