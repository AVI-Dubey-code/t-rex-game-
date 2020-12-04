var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var anicloud
var obstacle1
var obstacle2
var obstacle3
var obstacle4
var obstacle5
var obstacle6
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  anicloud = loadImage("cloud.png")
  groundImage = loadImage("ground2.png")
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.ong")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  spawnClouds();
  spawnObstacles();
  
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnClouds() {
  
  if( frameCount % 60 === 0){
    var cloud = createSprite(600,100,20,20);
    cloud.y = random(50,100)
    cloud.velocityX = -3
    cloud.addImage(anicloud)
    cloud.scale = 0.5;
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;          
  }      
   
}

function spawnObstacles(){

if(frameCount % 60 === 0){
  var obstacle = createSprite(600,180,20,20)
  obstacle.velocityX = -3
  var r = Math.round(random(1,6))
  switch(r){
    case 1: obstacle.addImage(obstacle1)
    break ; 
    case 2: obstacle.addImage(obstacle2)
    break;
    case 3: obstacle.addImage(obstacle3)
    break;
    case 4: obstacle.addImage(obstacle4)
    break;
   case 5: obstacle.addImage(obstacle5)
   break;
   case 6: obstacle.addImage(obstacle6)
      break;
      default:break
      
  }
}
}