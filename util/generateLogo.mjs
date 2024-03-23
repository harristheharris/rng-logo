
 import Square from '../lib/square.mjs'
 import Circle from '../lib/circle.mjs'
 import Triangle from '../lib/triangle.mjs'

function renderShape(data) {
    let whatShape = data.questShape;
    testFunction(`Test function 1 ${whatShape}`);
    const rngSquare = new Square;
    const rngTrianlgle = new Triangle;
    const rngCircle = new Circle;
    
    if (whatShape = "Square") {
        return rngSquare.render();
    }

    if (whatShape = "Triangle") {
        return rngTrianlgle.render();
    }

    if (whatShape = "Circle") {
        return rngCircle.render();
    }
}



function generateLogo(data) {
    
    console.log(`this is a console.log from generateLogo function line 30 Shape:${data.questShape} and color: ${data.questShapeColor}`);
    return `
    <svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${renderShape(data.questShape)}


    </svg>
    `
}

function testFunction(testVar){
    return console.log(testVar);
}

export default generateLogo;
export { testFunction }