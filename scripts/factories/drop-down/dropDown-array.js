import { searchInput, showDropDownComponents, hideDropDownComponents, createDropDownDom } from "./utilsDropDown-array.js"
import { filterUniqueAppareils, filterUniqueIngredients, filterUniqueUstensils, searchRecipes } from "../../service/recipe-service-array.js"
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
    //fermer le dropDown si on clique dehors et initialiser les inputs 
    window.onclick = function (event) {
        if (!event.target.matches('.click-ingredients')) {
            inputIngredient.value = ""
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
        }
        if (!event.target.matches('.click-appareils')) {
            inputAppareil.value = ""
            hideDropDownComponents(dropBtnApp, dropDownButtonB)
        }
        if (!event.target.matches('.click-ustensils')) {
            inputUstensil.value = ""
            hideDropDownComponents(dropBtnUst, dropDownButtonC)
        }
    }
    let getDropDownDom = () => {
        dropBtnIng.addEventListener("click", () => {
            const result = searchRecipes()
            showDropDownComponents(filterUniqueIngredients(result), dropBtnIng, "ingredient", dropDownButtonA)
        })
        inputIngredient.addEventListener("keyup", () => {
            const result = searchRecipes()
            searchInput(inputIngredient, filterUniqueIngredients(result), dropDownButtonA, dropBtnIng, "ingredient")
        })
        dropBtnApp.addEventListener("click", () => {
            const result = searchRecipes()
            showDropDownComponents(filterUniqueAppareils(result), dropBtnApp, "appareil", dropDownButtonB)
            dropDownIng.style.marginRight = "1%"
            dropBtnApp.style.marginLeft = "0.5%"
            dropDownButtonB.style.marginLeft = "0.5%"
        })
        inputAppareil.addEventListener("keyup", () => {
            const result = searchRecipes()
            searchInput(inputAppareil, filterUniqueAppareils(result), dropDownButtonB, dropBtnApp, "appareil")
        })
        //evenement appareils
        dropBtnUst.addEventListener("click", () => {
            const result = searchRecipes()
            showDropDownComponents(filterUniqueUstensils(result), dropBtnUst, "ustensil", dropDownButtonC)
            dropDownApp.style.marginRight = "1%"
            dropBtnUst.style.marginLeft = "2%"
            dropDownButtonC.style.marginLeft = "2%"
            dropDownButtonC.style.marginRight = "2%"
            dropBtnApp.style.marginLeft = "3%"
        })
        inputUstensil.addEventListener("keyup", () => {
            const result = searchRecipes()
            searchInput(inputUstensil, filterUniqueUstensils(result), dropDownButtonC, dropBtnUst, "ustensil")

        })
    }


    return { getDropDownDom }

}

