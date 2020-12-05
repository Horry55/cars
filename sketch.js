function setup() {
  createCanvas(1600,400);
 
  weight=Math.round(random(40,1500));
  car=createSprite(50, 200, 50, 50);
  speed=Math.round(random(55,90));
  wall=createSprite(1350,200,50,50);
  car.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background(0);  
  if (wall.x - car.x < car.width/2 + wall.width/2
    && car.x - wall.x < car.width/2 + wall.width/2) {
  car.velocityX=0;
  if (deformation>180){
    car.shapeColor=color(255,0,0)
  }
  if (deformation<180){
    car.shapeColor=color(230,230,0)
  }
   if (deformation<100){
    car.shapeColor=color(0,255,0)
  }
}
  wall.visible=0;
  //Fill=color("red")
  textSize(28)
  text("carspeed="+speed,600,300)
 
  drawSprites();
}
function touching(wall,car){
  
if (wall.y - car.y < car.height/2 + wall.height/2
  && car.y - wall.y < car.height/2 + wall.height/2){
 
}
}