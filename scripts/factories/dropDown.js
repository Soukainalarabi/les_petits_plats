export default function buttonFactory(uniqueIngredients, appareils, ustensils, recipes) {
    let buttonTag = document.querySelector(".button-recherche")
    let allButtonTag = document.querySelector(".buttonTag")
    let ingTag = document.querySelector(".ingredient-tag")
    let appTag = document.querySelector(".appareil-tag")
    let appButton = document.querySelector(".dropbtn-appareils")
    let iconBasIng = document.querySelector(".icon-bas-ing")
    let iconBasApp = document.querySelector(".icon-bas-app")
    let iconBasUst = document.querySelector(".icon-bas-ust")
    let rechercheIng = document.querySelector(".recherche-ingredients")
    let rechercheApp = document.querySelector(".recherche-appareils")
    let rechercheUst = document.querySelector(".recherche-ustensils")
    let titreApp = document.querySelector(".titreAppareils ")
    let titreIng = document.querySelector(".titreIngredients")
    let titreUst = document.querySelector(".titreUstensils")
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
    let buttonrechercheIng = document.querySelector(".button-recherche")
    inputIngredient.innerHTML = ""
    inputAppareil.innerHTML = ""
    rechercheIng.style.display = "none"
    rechercheApp.style.display = "none"
    rechercheUst.style.display = "none"
    let getButtonDom = (ingredient) => {
        closeTagIng.addEventListener("click", (e) => {
            rechercheIng.style.display = "none"
        })
        closeTagApp.addEventListener("click", () => {
            rechercheApp.style.display = "none"
        })
        closeTagUst.addEventListener("click", () => {
            rechercheUst.style.display = "none"
        })
        //evenement ingredients
        dropBtnIng.addEventListener("click", () => {
            titreApp.style.display = "block"
            inputAppareil.style.display = 'none'
            dropBtnApp.style.width = "170px"
            dropDownButtonB.style.display = "none"
            dropDownButtonB.style.width = "170px"
            dropDownButtonB.style.height = "60px"
            inputIngredient.value = ""
            dropDownButtonA.innerHTML = ""
            createIngredientsElement(uniqueIngredients)
            titreIng.style.display = "none"
            inputIngredient.style.display = 'block'
            dropBtnIng.style.width = "667px"
            iconBasIng.style.transform = "rotate(180deg)"
            dropDownButtonA.style.display = "grid"
            dropDownButtonA.style.gridTemplateColumns = "repeat(3, 1fr)";
            dropDownButtonA.style.width = "667px"
            dropDownButtonA.style.height = "397px"
            dropDownButtonA.style.overflow = "scroll"

            dropDownButtonA.style.backgroundColor = "#3282f7"
            dropDownButtonA.style.marginTop = "-1%"
            appButton.style.marginLeft = "8%"
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
            //Faire une condition qui permet de ne pas afficher un tag s'il est vide
            titreIng.style.display = "block"
            inputIngredient.style.display = 'none'
            dropBtnIng.style.width = "170px"
            dropDownButtonA.style.display = "none"
            dropDownButtonA.style.width = "170px"
            dropDownButtonA.style.height = "60px"
            ///test fermeture 
            inputAppareil.innerHTML = ""
            dropDownButtonB.innerHTML = ""
            createAppareilsElement(appareils)
            titreApp.style.display = "none"
            iconBasApp.style.transform = "rotate(180deg)"
            inputAppareil.style.display = 'block'
            dropDownButtonB.style.backgroundColor = "#68D9A4"
            dropDownButtonB.style.marginTop = "-1%"
            dropBtnApp.style.width = "667px"
            dropDownButtonB.style.display = "grid"
            // dropBtnUst.style.marginLeft = "34%"
            dropDownButtonB.style.gridTemplateColumns = "repeat(3, 1fr)";
            dropDownButtonB.style.marginLeft = "2%"
            appButton.style.marginLeft = "2%"
            dropDownButtonB.style.width = "667px"
            dropDownButtonB.style.height = "397px"
        })
        inputAppareil.addEventListener("keyup", (e) => {
            if (!inputAppareil.value.trim() || inputAppareil.value.length < 3) {
                dropDownButtonB.style.height = "auto"
                dropDownButtonB.innerHTML = ""
                dropBtnApp.style.width = "667px"
                createAppareilsElement(appareils)
                return
            }
            let filtredAppareils = appareils.filter(appareil =>
                appareil.toUpperCase().includes(inputAppareil.value.toUpperCase().trim()))
            dropDownButtonB.innerHTML = ""
            createAppareilsElement(filtredAppareils)

        })
        //evenement appareils
        dropBtnUst.addEventListener("click", () => {
            inputUstensil.innerHTML = ""
            dropDownButtonC.innerHTML = ""
            createUstensilsElement(ustensils)
            titreUst.style.display = "none"
            iconBasUst.style.transform = "rotate(180deg)"
            inputUstensil.style.display = 'block'
            dropDownButtonC.style.backgroundColor = "#ED6454"
            dropDownButtonC.style.marginTop = "-1%"
            dropBtnUst.style.width = "667px"
            dropDownButtonC.style.display = "grid"
            dropBtnUst.style.marginLeft = "5%"
            dropDownButtonC.style.gridTemplateColumns = "repeat(3, 1fr)";
            dropDownButtonC.style.marginRight = "2%"
            dropDownButtonC.style.marginLeft = "5%"
            dropDownButtonC.style.width = "667px"
            dropDownButtonC.style.height = "397px"
            dropDownButtonC.style.overflow = "scroll"

        })
        inputUstensil.addEventListener("keyup", (e) => {
            if (!inputUstensil.value.trim() || inputUstensil.value.length < 3) {
                dropDownButtonC.style.height = "auto"
                dropDownButtonC.innerHTML = ""
                dropBtnUst.style.width = "667px"
                createUstensilsElement(ustensils)
                return
            }
            let filtredUstensils = ustensils.filter(ustensil =>
                ustensil.toUpperCase().includes(inputUstensil.value.toUpperCase().trim()))
            dropDownButtonC.innerHTML = ""
            createUstensilsElement(filtredUstensils)
        })
        //evenement ustensils
    }
    return { getButtonDom }

    function createIngredientsElement(ingredients) {
        ingredients.forEach(el => {
            let dropDownIngredients = document.createElement("a")
            dropDownIngredients.setAttribute("class", `ingredients-recipe `)
            dropDownButtonA.appendChild(dropDownIngredients)
            dropDownIngredients.textContent = el
            dropDownIngredients.addEventListener("click", (e) => {
                buttonTag.style.display = "flex"
                allButtonTag.style.display = "block"
                ingTag.textContent = el
                titreIng.style.display = "block"
                rechercheIng.style.display = "flex"
                inputIngredient.style.display = 'none'
                dropBtnIng.style.width = "170px"
                dropDownButtonA.style.display = "none"
                dropDownButtonA.style.width = "170px"
                dropDownButtonA.style.height = "60px"
                iconBasIng.style.transform = "rotate(0deg)"

            })

        })
    }
    function createAppareilsElement(appareils) {
        appareils.forEach(appareil => {
            let dropDownAppareils = document.createElement("a")
            dropDownAppareils.setAttribute("class", `appareil-recipe `)
            dropDownButtonB.appendChild(dropDownAppareils)
            dropDownAppareils.textContent = appareil
            dropDownAppareils.addEventListener("click", (e) => {
                buttonTag.style.display = "block"
                appTag.textContent = appareil
                titreApp.style.display = "block"
                inputAppareil.style.display = 'none'
                allButtonTag.style.display = "block"
                rechercheApp.style.display = "flex"
                dropBtnApp.style.width = "170px"
                dropDownButtonB.style.display = "none"
                dropDownButtonB.style.width = "170px"
                dropDownButtonB.style.height = "60px"
                iconBasApp.style.transform = "rotate(0deg)"
            })
        })
    }
    function createUstensilsElement(ustensils) {
        ustensils.forEach(ustensil => {
            let dropDownUstensils = document.createElement("a")
            dropDownButtonC.appendChild(dropDownUstensils)
            dropDownUstensils.textContent = ustensil
            dropBtnUst.addEventListener("click", () => {
                dropBtnUst.style.width = "667px"
                dropDownButtonC.style.display = "grid"
                dropDownButtonC.style.gridTemplateColumns = "repeat(3, 1fr)";
                dropDownButtonC.style.width = "667px"
                dropDownButtonC.style.height = "auto"
                rechercheUst.style.display = "flex"

            })
        })
    }
}

