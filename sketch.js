var obj1,obj2,obj3,obj4,obj5,obj6


function setup() {
  createCanvas(1200,600);
 obj1 =  createSprite(600, 100, 50, 80);
 obj1.shapeColor = "pink"
obj1.velocityY = 4
obj2 = createSprite(600,500,80,30)
obj2.shapeColor = "pink"
obj2.velocityY = -4
obj3 =  createSprite(200, 100, 50, 80);
 obj3.shapeColor = "orange"
obj3.velocityY = 7
obj4 =  createSprite(200, 500, 50, 80);
 obj4.shapeColor = "orange"
obj4.velocityY = -7
obj5 =  createSprite(100, 200, 50, 80);
 obj5.shapeColor = "green"
obj5.velocityX = 6
obj6 =  createSprite(1100, 200, 50, 80);
 obj6.shapeColor = "green"
obj6.velocityX = -6
}

function draw() {
  background("black"); 
bounce(obj1,obj2)
  drawSprites();
}
function bounce(move,fix){
  if(move.x-fix.x<fix.width/2 + move.width/2 &&
    fix.x-move.x<fix.width/2 + move.width/2 
    ){
  move.velocityX = move.velocityX*(-1)
  fix.velocityX = fix.velocityX*(-1)
  }
  if(move.y-fix.y<fix.height/2 + move.height/2 &&
    fix.y-move.y<fix.height/2 + move.height/2){
      move.velocityY = move.velocityY*(-1)
      fix.velocityY = fix.velocityY*(-1)
  }
}
