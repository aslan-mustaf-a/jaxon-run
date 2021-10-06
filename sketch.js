var coin , road , jaxon , street , money , person , wall1 , wall2;

function preload(){
  //pre-load images
  coin = loadImage("coin.png");
  road = loadImage("path.png");
  jaxon = loadAnimation("Runner-1.png" , "Runner-2.png");
}

function setup(){
  createCanvas(250,400);
  //create sprites here
  
  createEdgeSprites();
  
  street = createSprite(125,200,250,400);
  money = createSprite(random(10,240),10,10,10); 
  money.scale = 0.3;
  money.velocityY = 4;
  person = createSprite(200,317,83,83);
  person.scale = 0.08;
  street.velocityY = 4;
  wall1 = createSprite(0,200,1,400);
  wall2 = createSprite(250,200,1,400);

}

function draw() {
  background("blue");

  drawSprites()

  street.addImage(road);
  money.addImage(coin);
  person.addAnimation("Run" , jaxon);
  

 
  if(person.isTouching(wall1)){
    person.x = person.x + 2;
  }
  
  if(person.isTouching(wall2)){
    person.x = person.x - 2;
  }

  if(person.isTouching(money)){
    money.destroy();
    money = createSprite(random(10,240),10,10,10); 
    money.scale = 0.3;
    money.velocityY = 4;
  }
 
  if(money.y > 400){
    money.y = 10;
    money.x = random(10,240)
  }
  
  if(street.y > 320){
    street.y = height/2
  }
  
  if(keyDown("left")){
    person.x = person.x - 2;


  }

  if(keyDown("right")){
    person.x = person.x + 2;
  }


}