const Circle = require('../lib/circle.js')

describe('Circle', () => {
    test('This should render a circle', ()=>{
        const circle = new Circle();
        const color = "blue";
        circle.setColor(color);
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`);
    })
})