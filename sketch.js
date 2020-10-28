var edges

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(0,0,50,50)
  rect3 = createSprite(600,200,50,50)
  edges = createEdgeSprites()
  rect3.shapeColor = "green"
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
  movingRect.velocityX = 3
  movingRect.velocityY = 4
}

function draw() {
  background(255,255,255);
  movingRect.bounceOff(edges)
  bounceOff(fixedRect,movingRect)
  if(isTouching(fixedRect,movingRect)){
      fixedRect.shapeColor = "red"
      movingRect.shapeColor = "red"
    } else{
      fixedRect.shapeColor = "green"
      movingRect.shapeColor = "green"
    }
    if(isTouching(rect3,movingRect)){
      rect3.shapeColor = "red"
      movingRect.shapeColor = "red"
    }else{
      rect3.shapeColor = "green"
      movingRect.shapeColor = "green"
    }
  drawSprites();
}
