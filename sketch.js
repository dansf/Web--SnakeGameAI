var snake;
var fruit;
var scl = 20;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  fruit = new Fruit();
}

function draw() {
  background(51);
  // snake.update();
  // snake.show();
}

setInterval(() => {
  fruit.update();
  fruit.show();
}, 5000);