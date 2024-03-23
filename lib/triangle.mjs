import Shapes from './shapes.mjs';

class Triangle extends Shapes {

    render(){
        return `<polygon points="100,10 150,190 50,190" height="100%" width="100%" fill="${this.color}" />`
    }
}

export default Triangle;