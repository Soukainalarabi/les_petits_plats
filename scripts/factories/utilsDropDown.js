
export function createComponentElements(components, dropBtnComponent, componentGroupeTag, dropDownContent) {
    components.forEach(component => {
        let componentElement = document.createElement("a")
        dropDownContent.appendChild(componentElement)
        componentElement.textContent = component
        componentElement.addEventListener("click", (e) => {
            componentGroupeTag.getElementsByTagName("h1")[0].textContent = component
            dropBtnComponent.getElementsByTagName("h2")[0].style.display = "block"
            componentGroupeTag.style.display = "flex"
            dropBtnComponent.getElementsByTagName("input")[0].style.display = 'none'
            dropBtnComponent.style.width = "170px"
            dropDownContent.style.display = "none"
            dropDownContent.style.width = "170px"
            dropDownContent.style.height = "60px"

            dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(0deg)"
        })
    })
}
export function searchInput(inputComponent, components, dropDownContent, dropBtnComponent, componentGroupeTag) {
    if (!inputComponent.value.trim() || inputComponent.value.length < 3) {
        dropDownContent.innerHTML = ""
        // dropBtnComponent.style.width = "667px"
        createComponentElements(components, dropBtnComponent, componentGroupeTag, dropDownContent)
        return
    }
    let filtredComponents = components.filter(component =>
        component.toUpperCase().includes(inputComponent.value.toUpperCase().trim()))
    dropDownContent.innerHTML = ""

    createComponentElements(filtredComponents, dropBtnComponent, componentGroupeTag, dropDownContent)
}
export function showDropDownComponents(components, dropBtnComponent, componentGroupeTag, dropDownContent) {
    dropBtnComponent.getElementsByTagName("input")[0].value = ""
    dropDownContent.innerHTML = ""
    createComponentElements(components, dropBtnComponent, componentGroupeTag, dropDownContent)
    // createIngredientsElement(uniqueIngredients)
    dropBtnComponent.getElementsByTagName("h2")[0].style.display = "none"
    dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(180deg)"
    dropBtnComponent.getElementsByTagName("input")[0].style.display = 'block'
    dropDownContent.style.display = "grid"
    dropDownContent.style.gridTemplateColumns = "repeat(3, 1fr)";
    dropBtnComponent.style.width = "667px"
    dropDownContent.style.width = "667px"
    dropDownContent.style.height = "397px"
    dropDownContent.style.overflow = "scroll"
    dropDownContent.style.marginTop = "-1%"
}
export function hideDropDownComponents(dropBtnComponent, dropDownContent) {
    dropBtnComponent.style.width = "170px"
    dropDownContent.style.display = "none"
    dropDownContent.style.width = "170px"
    dropDownContent.style.height = "60px"
    dropBtnComponent.getElementsByTagName("input")[0].style.display = 'none'
    dropBtnComponent.getElementsByTagName("h2")[0].style.display = "block"
    dropBtnComponent.getElementsByTagName("img")[0].style.transform = "rotate(0deg)"
}
export default { createComponentElements, searchInput, showDropDownComponents, hideDropDownComponents }