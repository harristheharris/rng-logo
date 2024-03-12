const Shapes = require('./shapes.js')

class Circle extends Shapes {

    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}

module.exports = Circle;