const Shapes = require('./shapes.js')

class Square extends Shapes {
    
    render(){
        return `<rect x="50" y="50" width="30" height="30" fill="${this.color}"/>`
    }
}

module.exports = Square;