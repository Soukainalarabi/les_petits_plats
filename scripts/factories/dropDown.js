import { searchInput, showDropDownComponents, hideDropDownComponents, createDropDownDom, componentGroupeTag } from "./utilsDropDown.js"
export default function buttonFactory(uniqueIngredients, appareils, ustensils, recipes, filterRecipes) {
    createDropDownDom()
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
    componentGroupeTag(ingredientGroupeTag)
    componentGroupeTag(appareilGroupeTag)
    componentGroupeTag(ustensilGroupeTag)

    // ingredientGroupeTag.style.display = ingredientGroupeTag.getElementsByTagName("h1")[0].textContent ? "flex" : "none"
    // appareilGroupeTag.style.display = appareilGroupeTag.getElementsByTagName("h1")[0].textContent ? "flex" : "none"
    // ustensilGroupeTag.style.display = ustensilGroupeTag.getElementsByTagName("h1")[0].textContent ? "flex" : "none"
    let getButtonDom = () => {
        closeTagIng.addEventListener("click", () => {
            ingredientGroupeTag.style.display = "none"
            ingredientGroupeTag.getElementsByTagName("h1")[0].textContent = ""
            /////initialiser la liste des ingredients lors du fermeture du tag 
            filterRecipes(recipes)
        })
        closeTagApp.addEventListener("click", () => {
            appareilGroupeTag.style.display = "none"
            appareilGroupeTag.getElementsByTagName("h1")[0].textContent = ""

        })
        closeTagUst.addEventListener("click", () => {
            ustensilGroupeTag.style.display = "none"
            ustensilGroupeTag.getElementsByTagName("h1")[0].textContent = ""
        })
        //evenement ingredients
        dropBtnIng.addEventListener("click", () => {
            hideDropDownComponents(dropBtnApp, dropDownButtonB)
            hideDropDownComponents(dropBtnUst, dropDownButtonC)
            showDropDownComponents(uniqueIngredients, dropBtnIng, ingredientGroupeTag, dropDownButtonA, filterRecipes, recipes)
            // hideDropDownComponentsIcon(dropBtnIng, dropDownButtonA)
            dropBtnApp.style.marginLeft = "8%"
            dropBtnUst.style.marginLeft = "16%"
        })
        inputIngredient.addEventListener("keyup", () => {
            searchInput(inputIngredient, uniqueIngredients, dropDownButtonA, dropBtnIng, ingredientGroupeTag, filterRecipes, recipes)
            dropDownButtonA.style.height = "auto"
        })
        //evenement appareils
        dropBtnApp.addEventListener("click", () => {
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
            hideDropDownComponents(dropBtnUst, dropDownButtonC)
            showDropDownComponents(appareils, dropBtnApp, appareilGroupeTag, dropDownButtonB, filterRecipes, recipes)
            // hideDropDownComponentsIcon(dropBtnApp, dropDownButtonB)

            dropBtnUst.style.marginLeft = "16%"
            dropDownButtonB.style.marginLeft = "2%"
            appButton.style.marginLeft = "2%"
        })
        inputAppareil.addEventListener("keyup", () => {
            searchInput(inputAppareil, appareils, dropDownButtonB, dropBtnApp, appareilGroupeTag, filterRecipes, recipes)
            dropDownButtonB.style.height = "auto"

        })
        //evenement appareils
        dropBtnUst.addEventListener("click", () => {
            hideDropDownComponents(dropBtnIng, dropDownButtonA)
            hideDropDownComponents(dropBtnApp, dropDownButtonB)
            showDropDownComponents(ustensils, dropBtnUst, ustensilGroupeTag, dropDownButtonC, filterRecipes, recipes)
            // hideDropDownComponentsIcon(dropBtnUst, dropDownButtonC)

            dropBtnUst.style.marginLeft = "5%"
            dropDownButtonC.style.marginLeft = "5%"
            dropDownButtonC.style.marginRight = "2%"
            dropBtnApp.style.marginLeft = "10%"
        })
        inputUstensil.addEventListener("keyup", () => {
            inputUstensil.addEventListener("keyup", () => {
                searchInput(inputUstensil, ustensils, dropDownButtonC, dropBtnUst, ustensilGroupeTag, filterRecipes, recipes)
                dropDownButtonC.style.height = "auto"

            })
        })
    }
    return { getButtonDom }

}

