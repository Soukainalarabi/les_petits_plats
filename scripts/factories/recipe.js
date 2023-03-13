export default function cardFactory(recipe) {
    let cardRecipes = document.createElement("div")
    let imgCard = document.createElement("div")
    let bodyCard = document.createElement("div")
    let recipeName = document.createElement("div")
    let name = document.createElement("h1")
    let timeCard = document.createElement("div")
    let iconTime = document.createElement("img")
    let timeNumber = document.createElement("p")
    let getCardDom = () => {
        cardRecipes.setAttribute("class", "card")
        imgCard.setAttribute("class", "card-img")
        bodyCard.setAttribute("class", "card-body")
        recipeName.setAttribute("class", "recipe-name")
        name.setAttribute("class", "card-text")
        timeCard.setAttribute("class", "time")
        iconTime.setAttribute("src", "assets/clock.png")
        iconTime.setAttribute("alt", "icon watch")
        timeNumber.setAttribute("class", "time-number")
        cardRecipes.appendChild(imgCard)
        cardRecipes.appendChild(bodyCard)
        cardRecipes.appendChild(recipeName)
        recipeName.appendChild(name)
        recipeName.appendChild(timeCard)
        timeCard.appendChild(iconTime)
        timeCard.appendChild(timeNumber)
        return (cardRecipes)

    }
    return { getCardDom }

}