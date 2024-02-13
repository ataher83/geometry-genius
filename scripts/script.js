 /*
 function calculateTriangleArea() {
    const baseInput = document.getElementById('triangle-base')
    const baseText = baseInput.value 
    const base = parseFloat(baseText)

    const heightInput = document.getElementById('triangle-height')
    const heightText = baseInput.value 
    const height = parseFloat(baseText)

    const area = 0.5 * base * height

    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText = area

}
*/
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputFieldText= inputField.value 
    const inputValue = parseFloat(inputFieldText) 
    return inputValue
}
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area 
}

