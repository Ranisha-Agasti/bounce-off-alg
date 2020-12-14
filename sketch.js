var rect1,rect2
function setup() {
  createCanvas(800,400);
  rect1 =  createSprite(400, 200, 50, 50);
  rect2 =  createSprite(100, 200, 70, 45);
rect1.velocityX = -3
rect2.velocityX = 3


}

function draw() {
  background(0);  
  drawSprites();
 if(rect1.x - rect2.x >= - (rect1.width/2 + rect2.width/2 ) 
 &&rect1.x - rect2.x <=rect1.width/2 + rect2.width/2 
 && rect1.y - rect2.y >= - (rect1.height/2 + rect2.height/2 ) 
 &&rect1.y - rect2.y <=rect1.height/2 + rect2.height/2 ){
rect1.velocityX = -(rect1.velocityX)
rect2.velocityX = -(rect2.velocityX)

 } 
}