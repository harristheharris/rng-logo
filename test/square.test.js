const Square = require('../lib/square.js')

describe('Square', ()=>{
    test('This should render a square', ()=>{
        const square = new Square();
        const color = "#FA340A";

        square.setColor(color);

        expect(square.render()).toEqual(`<rect x="50" y="50" width="30" height="30" fill="${color}"/>`)
    })
})