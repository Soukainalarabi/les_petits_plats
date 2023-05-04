import { getSelectedAppareils, getSelectedIngredients, getSelectedUstensils, searchRecipes } from "../../service/recipe-service-naive.js"
import showCardsRecipes from "../cards/cardsUtils-naive.js"
export default function tagFactory(type, component) {
    let typeGroupTag = document.createElement("div")
    let h1 = document.createElement("h1")
    let iconClose = document.createElement("img")
    let includeComponent = (tags, component) => {
        for (const element of tags) {
            if (element === component) {
                return true
            }
        }
        return false;
    }
    let getTagDom = () => {
        typeGroupTag.style.display = "none"
        if (type == "ingredient" && !includeComponent(getSelectedIngredients(), component)) {
            typeGroupTag.setAttribute("class", "ingredient-groupe-tag")
            h1.setAttribute("class", "ingredient-tag")
            iconClose.setAttribute("class", "closeTagIngredient")
            h1.textContent = component
            typeGroupTag.style.display = "flex"
        } else if (type == "appareil" && !includeComponent(getSelectedAppareils(), component)) {
            typeGroupTag.setAttribute("class", "appareil-groupe-tag")
            h1.setAttribute("class", "appareil-tag")
            iconClose.setAttribute("class", "closeTagAppareil")
            h1.textContent = component
            typeGroupTag.style.display = "flex"
        }
        else if (type == "ustensil" && !includeComponent(getSelectedUstensils(), component)) {
            typeGroupTag.setAttribute("class", "ustensil-groupe-tag")
            h1.setAttribute("class", "ustensil-tag")
            iconClose.setAttribute("class", "closeTagUstensil")
            h1.textContent = component
            typeGroupTag.style.display = "flex"
        }
        iconClose.setAttribute("src", "assets/close.png")
        iconClose.setAttribute("alt", "icon pour fermer le tag")
        typeGroupTag.appendChild(h1)
        typeGroupTag.appendChild(iconClose)
        iconClose.addEventListener("click", () => {
            typeGroupTag.style.display = "none"
            h1.textContent = ""
            showCardsRecipes(searchRecipes())
        })
        return typeGroupTag
    }
    return { getTagDom }
}