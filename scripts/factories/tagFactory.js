import showCardsRecipes from "./cardsUtils.js"
import { filterRecipesByTagsAndInputSearch, getTagIngredientsValue, getTagAppareilsValue, getTagUstensilsValue } from "../service/recipe-service.js"
export default function tagFactory(type, component) {
    let typeGroupTag = document.createElement("div")
    let h1 = document.createElement("h1")
    let iconClose = document.createElement("img")
    let getTagDom = () => {
        typeGroupTag.style.display = "none"
        if (type == "ingredient" && !getTagIngredientsValue().includes(component)) {
            typeGroupTag.setAttribute("class", "ingredient-groupe-tag")
            h1.setAttribute("class", "ingredient-tag")
            iconClose.setAttribute("class", "closeTagIngredient")
            h1.textContent = component
            typeGroupTag.style.display = "flex"

        } else if (type == "appareil" && !getTagAppareilsValue().includes(component)) {
            typeGroupTag.setAttribute("class", "appareil-groupe-tag")
            h1.setAttribute("class", "appareil-tag")
            iconClose.setAttribute("class", "closeTagAppareil")
            h1.textContent = component
            typeGroupTag.style.display = "flex"


        }
        else if (type == "ustensil" && !getTagUstensilsValue().includes(component)) {
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
            showCardsRecipes(filterRecipesByTagsAndInputSearch())
        })
        return typeGroupTag
    }
    return { getTagDom }
}