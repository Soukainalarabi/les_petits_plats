// import recipes from "./data/recipes.js"
export default function buttonFactory(uniqueIngredients, appareils, ustensils) {
    let h1 = document.querySelector("h1")
    let h2 = document.querySelector("h2")
    let closeIcon = document.querySelector(".icon-close")
    // let closedropDown = document.querySelector(".icon-bas")
    let dropDownButtonA = document.querySelector(".dropdown-contentA ")
    let dropBtnIng = document.querySelector(".dropbtn-ingredients")
    let dropDownButtonB = document.querySelector(".dropdown-contentB ")
    let dropBtnApp = document.querySelector(".dropbtn-appareils")
    let dropDownButtonC = document.querySelector(".dropdown-contentC ")
    let dropBtnUst = document.querySelector(".dropbtn-ustensiles")
    let inputIngredient = document.querySelector(".ingredients-input")
    let buttonrechercheIng = document.querySelector(".button-recherche")
    let getButtonDom = (ingredient) => {

        createIngredientsElement()
        appareils.forEach(appareil => {
            let dropDownAppareils = document.createElement("a")
            dropDownAppareils.setAttribute("class", `appareil-recipe `)
            dropDownButtonB.appendChild(dropDownAppareils)
            dropDownAppareils.textContent = appareil
            console.log(appareil)


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
            h2.style.display = "none"
            inputIngredient.style.display = 'block'
            dropBtnIng.style.width = "667px"
            dropDownButtonA.style.display = "grid"
            dropDownButtonA.style.gridTemplateColumns = "repeat(3, 1fr)";
            dropDownButtonA.style.width = "667px"
            dropDownButtonA.style.height = "397px"
        })
        dropBtnIng.addEventListener("keyup", (e) => {
            if (!inputIngredient.value.trim() || inputIngredient.value.length < 3) {
                // h1.textContent = inputIngredient.value
                // h2.style.display = "block"
                // buttonrechercheIng.style.display = "block"
                // dropDownButtonA.style.height = "69px"
                // dropBtnIng.style.width = "170px"
                // dropDownButtonA.style.display = "none"
                // inputIngredient.style.display = 'none'
                dropDownButtonA.innerHTML = ""
                dropBtnIng.style.width = "667px"
                createIngredientsElement()
                return
            }
            let filtredIngredients = uniqueIngredients.filter(uniqueIngredient =>
                uniqueIngredient.toUpperCase().includes(inputIngredient.value.toUpperCase().trim()))
            dropDownButtonA.innerHTML = ""

            filtredIngredients.forEach(ingredient => {
                let dropDownIngredients = document.createElement("a")
                dropDownIngredients.setAttribute("class", `ingredients-recipe `)
                dropDownButtonA.appendChild(dropDownIngredients)
                dropDownButtonA.style.display = "grid"
                dropBtnIng.style.width = "170px"
                dropDownButtonA.style.gridTemplateColumns = "repeat(1, 1fr)";
                dropDownButtonA.style.width = "170px"
                dropDownButtonA.style.height = "auto"
                dropDownIngredients.textContent = ingredient
            })

        })
        // dropBtnIng.addEventListener("keyup", (e) => {
        //     if (e.key == 'Enter') {
        //         h2.style.display = "block"
        //         buttonrechercheIng.style.display = "block"
        //         h1.textContent = inputIngredient.value
        //         dropDownButtonA.style.height = "69px"
        //         dropBtnIng.style.width = "170px"
        //         dropDownButtonA.style.display = "none"
        //         inputIngredient.style.display = 'none'

        //     }
        // })
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
            dropDownButtonC.style.height = "397px"
        })


    }
    return { getButtonDom }

    function createIngredientsElement() {
        dropDownButtonA.style.gridTemplateColumns = "repeat(3, 1fr)";
        dropDownButtonA.style.width = "667px"
        dropDownButtonA.style.height = "397px"
        uniqueIngredients.forEach(el => {
            let dropDownIngredients = document.createElement("a")
            dropDownIngredients.setAttribute("class", `ingredients-recipe `)
            dropDownButtonA.appendChild(dropDownIngredients)
            dropDownIngredients.textContent = el


        })
    }
}
