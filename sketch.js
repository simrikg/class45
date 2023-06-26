var bg, bgImg;
var balloon, balloonImg;
var bottomGround, topGround;

function preload(){
bgImg = loadImage("assets/bg.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

}

function setup(){
  createCanvas(1000,1000);
// bg image

bg = createSprite(300,300,10,5);
bg.addImage(bgImg);
bg.scale = 1.15;

balloon = createSprite(200,320,20,50)
balloon.addAnimation("balloon", balloonImg);
balloon.scale = 0.2;
//creating top and bottom ground
bottomGround = createSprite(500,700,1000,20)
topGround = createSprite(500,10,1000,20)

}

function draw(){
//making hot air baloon jump
if(keyDown("SPACE")){
  balloon.velocityY = -6;
}
if(keyDown("LEFT_ARROW")){
  balloon.velocityX = -2;
}
if(keyDown("RIGHT_ARROW")){
  balloon.velocityX = 2;
}
//to pull it down
balloon.velocityY = balloon.velocityY + 2;
//making hot air balloon collide with grounds
balloon.collide(bottomGround);
balloon.collide(topGround);
drawSprites();


}