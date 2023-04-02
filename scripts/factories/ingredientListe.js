
const createElement = (element) => {
    return document.createElement(element)
}
const setAttribute = (element, attr, value) => {
    element.setAttribute(attr, value)
}
const appendElement = (parent, elements = []) => {
    elements.forEach(element => {
        parent.appendChild(element)
    })
}
function createElement(ingredients,appareils) {
    if(ingredients){
        ingredients.forEach(ingredient => {
            
            let dropDownIngredients = document.createElement("a")
            dropDownIngredients.setAttribute("class", `ingredients-recipe `)
            dropDownButtonA.appendChild(dropDownIngredients)
            dropDownIngredients.textContent = ingredient
            if (!appTag) {
                rechercheApp.style.display = "none"
                return
            }
            dropDownIngredients.addEventListener("click", (e) => {
                buttonTag.style.display = "flex"
                // rechercheIng.style.display = "block"
                // rechercheApp.style.display = "none"
                // rechercheUst.style.display = "none"
                allButtonTag.style.display = "block"
                ingTag.textContent = ingredient
                titreIng.style.display = "block"
                inputIngredient.style.display = 'none'
                dropBtnIng.style.width = "170px"
                dropDownButtonA.style.display = "none"
                dropDownButtonA.style.width = "170px"
                dropDownButtonA.style.height = "60px"
            })
        })
    }
    if(appareils){
        appareils.forEach(appareil => {
            let dropDownAppareils = document.createElement("a")
            dropDownAppareils.setAttribute("class", `appareil-recipe `)
            dropDownButtonB.appendChild(dropDownAppareils)
            dropDownAppareils.textContent = appareil
            if (!ingTag) {
                rechercheIng.style.display = "none"
                return
            }
            dropDownAppareils.addEventListener("click", (e) => {
                buttonTag.style.display = "block"
                appTag.textContent = appareil
                titreApp.style.display = "block"
                // rechercheIng.style.display = "none"
                // rechercheApp.style.display = "block"
                // rechercheUst.style.display = "none"
                inputAppareil.style.display = 'none'
                allButtonTag.style.display = "block"
    
                dropBtnApp.style.width = "170px"
                dropDownButtonB.style.display = "none"
                dropDownButtonB.style.width = "170px"
                dropDownButtonB.style.height = "60px"
                // if (!ingTag.value) {
                //     rechercheIng.style.display = "none"
                // }
            })
    
    
        })
    }
   
}
