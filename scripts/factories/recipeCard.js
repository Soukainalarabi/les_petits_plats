export default function cardFactory(recipe) {
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
        recipe.ingredients.forEach(ingredient => {
            let ingredientsDetails = document.createElement("li")
            ingredientsUl.appendChild(ingredientsDetails)
            let quantityInit = ingredient.quantity ? ":" + ingredient.quantity : ""
            let unitInit = ingredient.unit ? ingredient.unit : ""
            ingredientsDetails.innerHTML = `<strong>${ingredient.ingredient}</strong> ${quantityInit} ${unitInit}`
        });
        return (cardRecipes)

    }
    return { getCardDom }

}