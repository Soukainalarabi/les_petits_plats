export default function cardFactory(recipe, ingredients) {
    let h1 = document.querySelector("h1")
    let inputIngredient = document.querySelector(".ingredients-input")
    let dropDownButtonA = document.querySelector(".dropdown-contentA ")
    let dropBtnIng = document.querySelector(".dropbtn-ingredients")
    let dropDownButtonB = document.querySelector(".dropdown-contentB ")
    let dropBtnApp = document.querySelector(".dropbtn-appareils")
    let dropDownButtonC = document.querySelector(".dropdown-contentC ")
    let dropBtnUst = document.querySelector(".dropbtn-ustensiles")
    let cardRecipes = document.createElement("div")
    let imgCard = document.createElement("div")
    let bodyCard = document.createElement("div")
    let recipeName = document.createElement("div")
    let name = document.createElement("h1")
    let timeCard = document.createElement("div")
    let iconTime = document.createElement("img")
    let timeNumber = document.createElement("p")
    let detailsRecipe = document.createElement("div")
    let ingredientsUl = document.createElement("ul")
    let pDescription = document.createElement("p")
    let dropDownAppareils = document.createElement("a")
    let dropDownUstensiles = document.createElement("a")

    let getCardDom = () => {
        cardRecipes.setAttribute("class", "card")
        cardRecipes.setAttribute("id", `recipe-${recipe.id}`)
        imgCard.setAttribute("class", "card-img")
        bodyCard.setAttribute("class", "card-body")
        recipeName.setAttribute("class", "recipe-name")
        name.setAttribute("class", "card-text")
        timeCard.setAttribute("class", "time")
        iconTime.setAttribute("src", "assets/clock.png")
        iconTime.setAttribute("alt", "icon watch")
        timeNumber.setAttribute("class", "time-number")
        detailsRecipe.setAttribute("class", "details-recipes")
        ingredientsUl.setAttribute("class", "ingredients")
        pDescription.setAttribute("class", "description")
        dropDownAppareils.setAttribute("class", `appareil-recipe ${recipe.id}`)
        dropDownUstensiles.setAttribute("class", `ustensile-recipe `)
        cardRecipes.appendChild(imgCard)
        cardRecipes.appendChild(bodyCard)
        bodyCard.appendChild(recipeName)
        recipeName.appendChild(name)
        recipeName.appendChild(timeCard)
        timeCard.appendChild(iconTime)
        timeCard.appendChild(timeNumber)
        bodyCard.appendChild(detailsRecipe)
        detailsRecipe.appendChild(ingredientsUl)
        detailsRecipe.appendChild(pDescription)
        name.textContent = recipe.name
        timeNumber.textContent = recipe.time + "min"
        pDescription.textContent = recipe.description
        dropDownButtonB.appendChild(dropDownAppareils)
        dropDownButtonC.appendChild(dropDownUstensiles)
        dropDownAppareils.textContent = recipe.appliance
        recipe.ustensils.forEach(ustensil => {
            dropDownUstensiles.textContent = ustensil //il y a une erreur au niveau du textContent des ustensile (voir data pour se rassurer)
        })
        recipe.ingredients.forEach(ingredient => {
            let ingredientsDetails = document.createElement("li")
            let dropDownIngredients = document.createElement("a")
            dropDownIngredients.setAttribute("class", `ingredients-recipe ${recipe.id}`)
            dropDownIngredients.setAttribute("value", ingredient.ingredient)
            ingredientsUl.appendChild(ingredientsDetails)
            dropDownButtonA.appendChild(dropDownIngredients)
            let quantityInit = ingredient.quantity ? ":" + ingredient.quantity : ""
            let unitInit = ingredient.unit ? ingredient.unit : ""
            ingredientsDetails.textContent = ingredient.ingredient + quantityInit + unitInit
            dropBtnIng.addEventListener("click", () => {
                h1.style.display = "none"
                // inputIngredient.style.display = 'block'
                dropDownIngredients.textContent = ingredient.ingredient
                dropBtnIng.style.width = "667px"
                dropDownButtonA.style.display = "grid"
                dropDownButtonA.style.gridTemplateColumns = "repeat(3, 1fr)";
                dropDownButtonA.style.width = "667px"
                dropDownButtonA.style.height = "397px"
            })
            dropBtnApp.addEventListener("click", () => {
                dropBtnApp.style.width = "667px"
                dropDownButtonB.style.display = "grid"
                dropDownButtonB.style.gridTemplateColumns = "repeat(3, 1fr)";
                dropDownButtonB.style.width = "667px"
                dropDownButtonB.style.height = "397px"
            })
            dropBtnUst.addEventListener("click", () => {
                dropBtnUst.style.width = "667px"
                dropDownButtonC.style.display = "grid"
                dropDownButtonC.style.gridTemplateColumns = "repeat(3, 1fr)";
                dropDownButtonC.style.width = "667px"
                dropDownButtonC.style.height = "397px"
            })




            //   (dropDownButtonB) {
            //     dropBtnIng.style.width = "170px"
            //     dropBtnApp.style.width = "667px"
            //     dropBtnApp.style.height = "397px"

            // }






            //les ingredients ne doivent pas se répéter




        });
        return (cardRecipes)

    }
    return { getCardDom }

}
