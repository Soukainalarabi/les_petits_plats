import { searchInput, showDropDownComponents, hideDropDownComponents, createDropDownDom } from "./utilsDropDown.js"
import { getUniqueIngredients, getUniqueAppareils, getUniqueUstensils, filterRecipesByTagsAndInputSearch } from "../service/recipe-service.js"
export default function dropDownFactory() {
    createDropDownDom()
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
    window.onclick = function (event) {
        if (!event.target.matches('.click-ingredients')) {
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
        }
        if (!event.target.matches('.click-appareils')) {
            hideDropDownComponents(dropBtnApp, dropDownButtonB)
        }
        if (!event.target.matches('.click-ustensils')) {
            hideDropDownComponents(dropBtnUst, dropDownButtonC)
        }
    }
    inputIngredient.innerHTML = ""
    inputAppareil.innerHTML = ""
   
    let getDropDownDom = () => {
        dropBtnIng.addEventListener("click", () => {
            const result = filterRecipesByTagsAndInputSearch()
            showDropDownComponents(getUniqueIngredients(result), dropBtnIng, "ingredient", dropDownButtonA)
        })
        inputIngredient.addEventListener("keyup", () => {
            const result = filterRecipesByTagsAndInputSearch()
            searchInput(inputIngredient, getUniqueIngredients(result), dropDownButtonA, dropBtnIng, "ingredient")
            dropDownButtonA.style.height = "auto"
        })
        //evenement appareils
        dropBtnApp.addEventListener("click", () => {
            const result = filterRecipesByTagsAndInputSearch()

            showDropDownComponents(getUniqueAppareils(result), dropBtnApp, "appareil", dropDownButtonB)
            dropDownIng.style.marginRight = "1%"
            dropBtnApp.style.marginLeft = "2%"
            dropDownButtonB.style.marginLeft = "2%"
        })
        inputAppareil.addEventListener("keyup", () => {
            const result = filterRecipesByTagsAndInputSearch()
            searchInput(inputAppareil, getUniqueAppareils(result), dropDownButtonB, dropBtnApp, "appareil")
            dropDownButtonB.style.height = "auto"
        })
        //evenement appareils
        dropBtnUst.addEventListener("click", () => {
            const result = filterRecipesByTagsAndInputSearch()
            showDropDownComponents(getUniqueUstensils(result), dropBtnUst, "ustensil", dropDownButtonC)
            dropDownApp.style.marginRight = "1%"
            dropBtnUst.style.marginLeft = "5%"
            dropDownButtonC.style.marginLeft = "5%"
            dropDownButtonC.style.marginRight = "2%"
            dropBtnApp.style.marginLeft = "3%"
        })
        inputUstensil.addEventListener("keyup", () => {
            const result = filterRecipesByTagsAndInputSearch()
            searchInput(inputUstensil, getUniqueUstensils(result), dropDownButtonC, dropBtnUst, "ustensil")
            dropDownButtonC.style.height = "auto"

        })
    }


    return { getDropDownDom }

}

