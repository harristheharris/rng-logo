const Triangle = require('../lib/triangle.js')

describe('Triangle', ()=>{
    test('This should render a circle', ()=>{
        const triangle = new Triangle();
        const color = "pink";
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon points="100,10 150,190 50,190" height="100%" width="100%" fill="${color}" />`)
    })
})