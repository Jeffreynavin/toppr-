function preload() {
  //load game assets

}
var snakeGroup;
var snake;
function setup() {
  createCanvas(600, 600);
  player = createSprite(40, 550, 30, 30);
  target = createSprite(560, 40, 30, 30);
  obs1 = createSprite(300, 120, 100, 20);
  obs1.velocityX = 5;
  obs2 = createSprite(300, 320, 100, 20);
  obs2.velocityX = -5;
  snakeGroup= new Group();

  edges = createEdgeSprites();
  target.shapeColor = "pink"
  obs1.shapeColor = "red"
  obs2.shapeColor = "red"
  player.shapeColor = "white"
}

function draw(){
   background("green");
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  

  if (keyDown("up")) {
    player.y = player.y - 3
  }
  if (keyDown("left")) {
    player.x = player.x - 3
  }
  if (keyDown("right")) {
    player.x = player.x + 3
  }
  if (keyDown("down")) {
    player.y = player.y + 3
  }
  if (player.isTouching(target)) {
    text("you win", 200, 200)
  }
  if (player.isTouching(obs1)) {
    player.x = 40;
    player.y = 550;
  }
  if (player.isTouching(obs2)) {
    player.x = 40;
    player.y = 550;
  }
  drawSprites();
  generateSnake();
  for(var i = 0 ; i< (snakeGroup).length ;i++){
    var temp = (snakeGroup).get(i) ;
    if (player.isTouching(temp)){
      player.x = 40;
      player.y = 550;

    }
    
    
    
  }


  
  function generateSnake() {
    if (frameCount % 30 === 0) {
      console.log(frameCount);
     snake = createSprite(600,random(70,520),random(30,120), 5);
      snake.shapeColor = "yellow"
      snake.velocityX = random(-4, 4);
      snake.velocityY = random(-4, 4);
      snakeGroup.add(snake);

      
      
    }

  }
 

}
  
