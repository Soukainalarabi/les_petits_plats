import { filterRecipesByTagsAndInputSearch, findAllRecipes, getUniqueAppareils, getUniqueIngredients, getUniqueUstensils } from "./recipe-service-array.js"

/****
 * 
 * ce fichier est le point d'entré de service recipe tous les composants doivent appeler ce fichier 
 * 
 * ce fichier manipule le dom
 * 
 * 
 */

//chercher les recipes selon les ingredients,appareils et ustensils selectionnée et les mots saisi par l'usitilsateur dans l'inputGlobal
export let searchRecipes = () => {
    const selectedIngredients = getSelectedIngredients()
    const selectedAppareils = getSelectedAppareils()
    const selectedUstensils = getSelectedUstensils()
    let inputSearch = document.getElementById("contenu-search")?.value
    return filterRecipesByTagsAndInputSearch(inputSearch, selectedIngredients, selectedAppareils, selectedUstensils)
}
//Recuperer les tags selectionner selon le selector .ingredient-tag,.appareil-tag
//.ustensil-tag
function getSelectedTagsBySelector(selector) {
    let elements = [...document.querySelectorAll(selector)]
    return elements.filter(element => element.textContent)
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
export let findAll = () => findAllRecipes()
export default { searchRecipes, findAll, getSelectedIngredients, getSelectedAppareils, getSelectedUstensils, filterUniqueIngredients, filterUniqueUstensils, filterUniqueAppareils }