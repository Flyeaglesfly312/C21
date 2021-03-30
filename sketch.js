var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 1;
  
  gameObject1 = createSprite(900,100,50,50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(900,200,50,50);
  gameObject2.shapeColor = "purple"
  gameObject2.velocityY = 1;

  gameObject3 = createSprite(900,300,50,50);
  gameObject3.shapeColor = "yellow";
  gameObject3.velocityY = -1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
if(touchTester(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}

else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "blue"

}

if(touchTester(movingRect,gameObject2)){
  movingRect.shapeColor = "red"
  gameObject2.shapeColor = "red"
}

else{
  movingRect.shapeColor = "green"
  gameObject2.shapeColor = "purple"
}


bounceTester(gameObject2,gameObject3);
  drawSprites();

  
}



