
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")

}

function draw()   {


  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
 
  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if (keyIsDown(RIGHT_ARROW)){
    background("red");
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }


    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }


  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  drawSprites();

}
