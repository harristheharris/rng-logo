//we are importing our parent class shapes
import Shapes from './shapes.mjs';

//we are making our new class Circle a child of Shapes. This means that we will have the setColor method already a property of the class (did I say that right?)
class Circle extends Shapes {

    //we create a method that created our circle in svg syntx that will later be wrote to our svg page. "this.color" refers to the color given to the shape by the user. 
    //Currently the svg value i put in for the circle are just some value I found as an example in mdn. Will probably change these valuse later for sizing. This will be the case for all the shapes
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}

//we export that 
export default Circle;