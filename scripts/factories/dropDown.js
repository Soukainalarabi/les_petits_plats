import { searchInput, showDropDownComponents, hideDropDownComponents } from "./utilsDropDown.js"
export default function buttonFactory(uniqueIngredients, appareils, ustensils, recipes) {
    let appButton = document.querySelector(".dropbtn-appareils")
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
    inputIngredient.innerHTML = ""
    inputAppareil.innerHTML = ""
    ingredientGroupeTag.style.display = "none"
    appareilGroupeTag.style.display = "none"
    ustensilGroupeTag.style.display = "none"
    let getButtonDom = (ingredient) => {
        closeTagIng.addEventListener("click", (e) => {
            ingredientGroupeTag.style.display = "none"
        })
        closeTagApp.addEventListener("click", () => {
            appareilGroupeTag.style.display = "none"
        })
        closeTagUst.addEventListener("click", () => {
            ustensilGroupeTag.style.display = "none"
        })
        //evenement ingredients
        dropBtnIng.addEventListener("click", () => {
            hideDropDownComponents(dropBtnApp, dropDownButtonB)
            hideDropDownComponents(dropBtnUst, dropDownButtonC)  
            showDropDownComponents(uniqueIngredients, dropBtnIng, ingredientGroupeTag, dropDownButtonA)
            dropBtnApp.style.marginLeft = "8%"
        })
        inputIngredient.addEventListener("keyup", (e) => {
            searchInput(inputIngredient, uniqueIngredients, dropDownButtonA, dropBtnIng, ingredientGroupeTag)
        })
        //evenement appareils
        dropBtnApp.addEventListener("click", () => {
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
            hideDropDownComponents(dropBtnUst, dropDownButtonC)  
            showDropDownComponents(appareils, dropBtnApp, appareilGroupeTag, dropDownButtonB)
            dropBtnUst.style.marginLeft = "16%"
            dropDownButtonB.style.marginLeft = "2%"
            appButton.style.marginLeft = "2%"
        })
        inputAppareil.addEventListener("keyup", (e) => {
            searchInput(inputAppareil, appareils, dropDownButtonB, dropBtnApp, appareilGroupeTag)
        })
        //evenement appareils
        dropBtnUst.addEventListener("click", () => {
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
            hideDropDownComponents(dropBtnApp, dropDownButtonB)  
            showDropDownComponents(ustensils, dropBtnUst, ustensilGroupeTag, dropDownButtonC)
            dropBtnUst.style.marginLeft = "5%" 
            dropDownButtonC.style.marginLeft = "5%"
            dropDownButtonC.style.marginRight = "2%"
            dropBtnApp.style.marginLeft = "10%"
        })
        inputUstensil.addEventListener("keyup", (e) => {
            inputUstensil.addEventListener("keyup", (e) => {
                searchInput(inputUstensil, ustensils, dropDownButtonC, dropBtnUst, ustensilGroupeTag)
            })
        })
    }
    return { getButtonDom }
    
}

