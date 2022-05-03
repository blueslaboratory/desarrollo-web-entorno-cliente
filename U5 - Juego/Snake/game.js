import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime){

    if(gameOver){
        // si pierdes, paramos aqui:
        if (confirm('Ooooh, has perdido... Press enter to continue.')) {
            window.location = '/'
          }
          return
    }

    // dime cuando y a que hora puedo animar mi siguiente frame:
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime -lastRenderTime) / 1000

    // si el tiempo es <1/SNAKE_SPEED no actualices el movimiento del snake 
    if (secondsSinceLastRender < 1/SNAKE_SPEED){
        return
    }
    
    // hacemos el render a la velocidad de SNAKE_SPEED/segundo
    // console.log('Render')
    lastRenderTime = currentTime
    // console.log(secondsSinceLastRender)

    update()
    draw()
}


function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    // borrar las piezas anteriores del snake:
    gameBoard.innerHTML = ''

    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

// empezar el loop la primera vez:
window.requestAnimationFrame(main)