var PLAY=1;
var END=0;
var gameState=1;
var score = 0;

function preload(){
  swordimg = loadImage("sword.png");
 
  f1img = loadImage("fruit1.png");
  f2img = loadImage("fruit2.png");
  f3img = loadImage("fruit3.png");
  f4img = loadImage("fruit4.png");
  
 alien_moving = loadAnimation("alien1.png","alien2.png");
  
  gameover = loadImage("gameover.png")
  
   gameOverSound = loadSound("gameover.mp3")
//  knifeSwooshSound = loadSound("knifeSwoosh.mp3")
}

function setup(){
  
  createCanvas(600,600);
  sword = createSprite(200,200);
  sword.addImage(swordimg);
  
  fruitG = new Group();
  alienG = new Group();
  
  go = createSprite(250,250);
  
}

function draw(){
  background("cyan");
  text("Chops:"+score,300,30);
  if(gameState===1){
    go.visible = false;
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  fruits();
  aliens();
    if(fruitG.isTouching(sword)){
      fruitG.destroyEach();
      //knifeSwooshSound.play();
      score = score+2;
    }
    if(alienG.isTouching(sword)){
      gameState=0;
      gameOverSound.play()
    }
  }
  if(gameState===0){
    fruitG.destroyEach();
    alienG.destroyEach();
    fruitG.setVelocityXEach(0);
    alienG.setVelocityXEach(0);
    go.visible = true;
    go.addImage(gameover);
    sword.visible = false;
    
  }
drawSprites();
}

function fruits(){
  
  if(frameCount%60===0){
    position = Math.round(random(1,2));
  fruit = createSprite(400,200);
    console.log(position);
    
     if(position==1)
    {
    fruit.x=600;
    fruit.velocityX=-(7+(score/4));
    }
    else
    {
      if(position==2){
      fruit.x=0;
      
  //Increase the velocity of fruit after score 4 or 10
      fruit.velocityX= (7+(score/4));
      }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  fruit.scale = 0.2;
  var rand = Math.round(random(1,4));
  if(rand===1){
    fruit.addImage(f1img);
  }
    
  if(rand===2){
    fruit.addImage(f2img);
  }
    
  if(rand===3){
    fruit.addImage(f3img);
  }
    
  if(rand===4){
    fruit.addImage(f4img);
  }
  
  fruit.y = Math.round(random(50,550));
  //fruit.velocityX = -5;
  fruit.lifetime = 100;
  fruitG.add(fruit);
  }
}

function aliens(){
  
  if(frameCount%100===0){
    alien = createSprite(400,200);
    alien.addAnimation("moving",alien_moving);
    alien.y = Math.round(random(10,340));
    alien.velocityX = -5;
    alien.lifetime = 200;
    alienG.add(alien);
  }
}
