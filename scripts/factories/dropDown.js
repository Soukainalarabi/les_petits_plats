export default function buttonFactory(uniqueIngredients, appareils, ustensils) {
    let buttonTagIng = document.querySelector(".button-recherche")
    let h1 = document.querySelector("h1 ,.ingredient-tag")
    let h2 = document.querySelector("h2")
    let closeIcon = document.querySelector(".icon-close")
    let dropDownButtonA = document.querySelector(".dropdown-contentA ")
    let dropBtnIng = document.querySelector(".dropbtn-ingredients")
    let dropDownButtonB = document.querySelector(".dropdown-contentB ")
    let dropBtnApp = document.querySelector(".dropbtn-appareils")
    let dropDownButtonC = document.querySelector(".dropdown-contentC ")
    let dropBtnUst = document.querySelector(".dropbtn-ustensiles")
    let inputIngredient = document.querySelector(".ingredients-input")
    let buttonrechercheIng = document.querySelector(".button-recherche")
    inputIngredient.innerHTML = ""
    let getButtonDom = (ingredient) => {
        appareils.forEach(appareil => {
            let dropDownAppareils = document.createElement("a")
            dropDownAppareils.setAttribute("class", `appareil-recipe `)
            dropDownButtonB.appendChild(dropDownAppareils)
            dropDownAppareils.textContent = appareil
        })
        ustensils.forEach(ustensil => {
            let dropDownUstensiles = document.createElement("a")
            dropDownButtonC.appendChild(dropDownUstensiles)
            dropDownUstensiles.textContent = ustensil //il y a une erreur au niveau du textContent des ustensile (voir data pour se rassurer)
        })
        closeIcon.addEventListener("click", () => {
            buttonrechercheIng.style.display = "none"
        })
        //evenement ingredients
        dropBtnIng.addEventListener("click", () => {
            inputIngredient.value = ""
            dropDownButtonA.innerHTML = ""
            createIngredientsElement(uniqueIngredients)
            h2.style.display = "none"
            inputIngredient.style.display = 'block'
            dropBtnIng.style.width = "667px"
            dropDownButtonA.style.display = "grid"
            dropDownButtonA.style.gridTemplateColumns = "repeat(3, 1fr)";
            dropDownButtonA.style.width = "667px"
            dropDownButtonA.style.height = "auto"
        })
        inputIngredient.addEventListener("keyup", (e) => {
            if (!inputIngredient.value.trim() || inputIngredient.value.length < 3) {
                dropDownButtonA.style.height = "auto"
                dropDownButtonA.innerHTML = ""
                dropBtnIng.style.width = "667px"
                createIngredientsElement(uniqueIngredients)
                return
            }
            let filtredIngredients = uniqueIngredients.filter(uniqueIngredient =>
                uniqueIngredient.toUpperCase().includes(inputIngredient.value.toUpperCase().trim()))
            dropDownButtonA.innerHTML = ""
            createIngredientsElement(filtredIngredients)

        })
        //evenement appareils
        dropBtnApp.addEventListener("click", () => {
            dropBtnApp.style.width = "667px"
            dropDownButtonB.style.display = "grid"
            dropBtnUst.style.marginLeft = "34%"
            dropDownButtonB.style.gridTemplateColumns = "repeat(3, 1fr)";
            dropDownButtonB.style.marginRight = "2%"
            dropDownButtonB.style.width = "667px"
            dropDownButtonB.style.height = "397px"
        })
        //evenement ustensils
        dropBtnUst.addEventListener("click", () => {
            dropBtnUst.style.width = "667px"
            dropDownButtonC.style.display = "grid"
            dropDownButtonC.style.gridTemplateColumns = "repeat(3, 1fr)";
            dropDownButtonC.style.width = "667px"
            dropDownButtonC.style.height = "auto"
        })


    }
    return { getButtonDom }

    function createIngredientsElement(ingredients) {

        //  dropDownButtonA.style.gridTemplateColumns = "repeat(3, 1fr)";
        //  dropDownButtonA.style.width = "667px"
        //  dropDownButtonA.style.height = "auto"
        ingredients.forEach(el => {
            let dropDownIngredients = document.createElement("a")
            dropDownIngredients.setAttribute("class", `ingredients-recipe `)
            dropDownButtonA.appendChild(dropDownIngredients)
            dropDownIngredients.textContent = el
            dropDownIngredients.addEventListener("click", (e) => {
                buttonTagIng.style.display = "block"
                h1.textContent = el
                h2.style.display = "block"
                inputIngredient.style.display = 'none'
                dropBtnIng.style.width = "170px"
                dropDownButtonA.style.display = "none"
                dropDownButtonA.style.width = "170px"
                dropDownButtonA.style.height = "60px"
            })


        })
    }
}
