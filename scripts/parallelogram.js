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

 function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base')
    const height = getInputValueById('parallelogram-height')
    const area = base * height
    setInnerTextById('parallelogram-area', area)


}

