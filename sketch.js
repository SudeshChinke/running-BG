var s1 , s2;
var Ship;
var sea;
function preload(){
  s1 = loadAnimation("ship1.png","ship2.png");
  bg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage("b",bg);
  sea.scale = 0.3;
  Ship = createSprite(80,260,50,50);
  Ship.addAnimation("s", s1);
  Ship.scale = 0.2;
  
}

function draw() {
  background("blue");
 sea.velocityX = -2;
 if(sea.x<100){
  sea.x = 200;
 }
drawSprites();
}