
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
