import { getInputDirection } from "./input.js"

// se mueve 2 veces por segundo:
export const SNAKE_SPEED = 5

// con el sistema grid podemos representar el snake con coordenadas x e y
// posicion de inicio:
const snakeBody = [
    { x:12, y:12 }
]
let newSegments = 0

// moviendo el snake, el segmento anterior sigue al siguiente:
export function update(){
    //console.log('update snake');

    addSegments()

    const inputDirection = getInputDirection()

    for (let i=snakeBody.length-2; i>=0; i--){
        // setteando el objeto a un nuevo objeto:
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    // update de la cabeza
    // +y : se mueve abajo
    // -y : se mueve arriba

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    
}

export function draw(gameBoard){
    //console.log('draw snake');
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
}

// cuanto se expande nuestra serpiente:
export function expandSnake(amount){
    newSegments += amount
}

// comprobamos si estamos encima de la comida:
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
    })
  }
  /*
export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) {
            return false
        }
        return equalPositions(segment, position)
    })
}*/

export function getSnakeHead(){
    return snakeBody[0]
}

// si la cabeza del snake toca el cuerpo, excepto la cabeza, que ignoramos
export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(p1, p2){
    return p1.x === p2.x && p1.y === p2.y
}

function addSegments(){
    for (let i=0; i<newSegments; i++){
        //duplicamos el ultimo elemento de nuestra snake y lo agregamos
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    // para que no se expanda eternamente:
    newSegments = 0
}