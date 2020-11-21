
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var bananaGrp;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  monkey = createSprite(150,300);
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.15;
  
  ground = createSprite(0,350,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {
  background("180")
  
  if (keyDown("space") && monkey.y>=200){
    monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
  

 
  
  
 
  
  if( ground.x <0 ) {
    ground.x = ground.width/2;
  }

 stroke("white");
 textSize(20);
 fill("white");
 text("Score: "+score,500,50);
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime =Math.ceil(frameCount/frameRate())
 text("Survival Time: "+ survivalTime,100,50);
  
  drawSprites()

  
}


function food() {
  
  if( frameCount % 80 === 0){
    banana = createSprite( 550, Math.round(random(120,200)))
    banana.addImage(bananaImage)
    banana.scale = 0.07;
    banana.velocityX= -4;
    banana.lifetime = 150;
    bananaGroup.add(banana);
}

}


function obstacles(){
  if( frameCount % 300 ===0){
    obstacle = createSprite(550,305);
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
  }
}
  





