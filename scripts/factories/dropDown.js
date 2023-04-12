import { searchInput, showDropDownComponents, hideDropDownComponents, createDropDownDom, componentGroupeTag, showCardsRecipes } from "./utilsDropDown.js"
import { getUniqueIngredients, getUniqueAppareils, getUniqueUstensils, filterRecipesByTagsAndInputSearch } from "../service/recipe-service.js"
export default function buttonFactory() {
    createDropDownDom()
    let ingredientGroupeTag = document.querySelector(".ingredient-groupe-tag")
    let appareilGroupeTag = document.querySelector(".appareil-groupe-tag")
    let ustensilGroupeTag = document.querySelector(".ustensil-groupe-tag")
    let closeTagIng = document.querySelector(".closeTagIngredient")
    let closeTagApp = document.querySelector(".closeTagAppareil")
    let closeTagUst = document.querySelector(".closeTagUstensil")
    let dropDownButtonA = document.querySelector(".dropdown-contentA ")
    let dropBtnIng = document.querySelector(".dropbtn-ingredients")
    let dropDownButtonB = document.querySelector(".dropdown-contentB ")
    let dropBtnApp = document.querySelector(".dropbtn-appareils")
    let dropDownButtonC = document.querySelector(".dropdown-contentC ")
    let dropBtnUst = document.querySelector(".dropbtn-ustensils")
    let inputIngredient = document.querySelector(".ingredients-input")
    let inputAppareil = document.querySelector(".appareils-input")
    let inputUstensil = document.querySelector(".ustensils-input")
    let dropDownIng = document.querySelector(".dropdown-ingredients")
    let dropDownApp = document.querySelector(".dropdown-appareils")
    inputIngredient.innerHTML = ""
    inputAppareil.innerHTML = ""
    componentGroupeTag(ingredientGroupeTag)
    componentGroupeTag(appareilGroupeTag)
    componentGroupeTag(ustensilGroupeTag)
    let getButtonDom = () => {
        closeTagIng.addEventListener("click", () => {
            ingredientGroupeTag.style.display = "none"
            ingredientGroupeTag.getElementsByTagName("h1")[0].textContent = ""
            showCardsRecipes(filterRecipesByTagsAndInputSearch())

            /////initialiser la liste des ingredients lors du fermeture du tag 
        })
        closeTagApp.addEventListener("click", () => {
            appareilGroupeTag.style.display = "none"
            appareilGroupeTag.getElementsByTagName("h1")[0].textContent = ""
            showCardsRecipes(filterRecipesByTagsAndInputSearch()
            )

        })
        closeTagUst.addEventListener("click", () => {
            ustensilGroupeTag.style.display = "none"
            ustensilGroupeTag.getElementsByTagName("h1")[0].textContent = ""
            showCardsRecipes(filterRecipesByTagsAndInputSearch()
            )
        })
        //evenement ingredients
        dropBtnIng.addEventListener("click", () => {
            hideDropDownComponents(dropBtnApp, dropDownButtonB)
            hideDropDownComponents(dropBtnUst, dropDownButtonC)
            const result = filterRecipesByTagsAndInputSearch()
            showDropDownComponents(getUniqueIngredients(result), dropBtnIng, ingredientGroupeTag, dropDownButtonA)
        
        })
        inputIngredient.addEventListener("keyup", () => {
            const result = filterRecipesByTagsAndInputSearch()
            searchInput(inputIngredient, getUniqueIngredients(result), dropDownButtonA, dropBtnIng, ingredientGroupeTag)
            dropDownButtonA.style.height = "auto"
        })
        //evenement appareils
        dropBtnApp.addEventListener("click", () => {
            const result = filterRecipesByTagsAndInputSearch()
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
            hideDropDownComponents(dropBtnUst, dropDownButtonC)
            showDropDownComponents(getUniqueAppareils(result), dropBtnApp, appareilGroupeTag, dropDownButtonB)
            dropDownIng.style.marginRight = "1%"
            dropBtnApp.style.marginLeft = "2%"
            dropDownButtonB.style.marginLeft = "2%"
        })
        inputAppareil.addEventListener("keyup", () => {
            const result = filterRecipesByTagsAndInputSearch()
            searchInput(inputAppareil, getUniqueAppareils(result), dropDownButtonB, dropBtnApp, appareilGroupeTag)
            dropDownButtonB.style.height = "auto"
        })
        //evenement appareils
        dropBtnUst.addEventListener("click", () => {
            const result = filterRecipesByTagsAndInputSearch()
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
            hideDropDownComponents(dropBtnApp, dropDownButtonB)
            showDropDownComponents(getUniqueUstensils(result), dropBtnUst, ustensilGroupeTag, dropDownButtonC)
            dropDownApp.style.marginRight = "1%"
            dropBtnUst.style.marginLeft = "5%"
            dropDownButtonC.style.marginLeft = "5%"
            dropDownButtonC.style.marginRight = "2%"
            dropBtnApp.style.marginLeft = "3%"
        })
        inputUstensil.addEventListener("keyup", () => {
            const result = filterRecipesByTagsAndInputSearch()
            searchInput(inputUstensil, getUniqueUstensils(result), dropDownButtonC, dropBtnUst, ustensilGroupeTag)
            dropDownButtonC.style.height = "auto"

        })
    }


    return { getButtonDom }

}

