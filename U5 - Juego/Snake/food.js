import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

// el grid de CSS empieza en 1 y no en 0
let food = getRandomFoodPosition()
// cuanto crece nuestra snake cuando come
const EXPANSION_RATE = 4

export function update(){
    // si nuestra snake esta encima de la comida y se la puede comer: true
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
    
}

export function draw(gameBoard){
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}


// comida random que no este en la posicion del snake
function getRandomFoodPosition(){
    let newFoodPosition

    // si la comida esta donde el snake, dame otra posicion:
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}