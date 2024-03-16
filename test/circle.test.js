const Circle = require('../lib/circle.js')

//describe is grouping this test. it takes two parameters. The first is a description (usually a string I think?) and a callback function
describe('Circle', () => {
    //test method is called to make the test. It takes two arguments. The first is a string that is a test name. The second is a function with the expectations to the test. There is also a third argument that is optional (a timeout function). However, we do not use that here
    test('This should render a circle', ()=>{
        //we create our variables for the test
        //a new circle object that is from the the Circle Class
        const circle = new Circle();
        //we have to use an example color so we set a color variable
        const color = "blue";
        //we call the method we defined in that super class Shapes and set the circle color to the example color
        circle.setColor(color);
        //we render the svg associated with the circle class and then
        //call the toEqual method to verify that the circle we created is the value it should be. 
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    })
})