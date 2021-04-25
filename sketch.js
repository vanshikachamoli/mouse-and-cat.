var cat , cat1Img, cat2Img, cat3Img;

var mouse, mouse1Img, mouse2Img, mouse3Img;

var garden, gardenImg;



function preload() {
    //load the images here
    
    cat1Img = loadAnimation ("images/cat1.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png"  );
    cat3Img = loadAnimation("images/cat4.png");
    mouse3Img = loadAnimation("images/mouse4.png");
    


    garden = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    
    cat = createSprite(800,600,9,9);
    cat.addAnimation("sleeping",cat1Img);
    cat.scale = 0.2;

    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("standing",mouse1Img);
    mouse.scale = 0.15;
    
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
    cat.addAnimation("lastImage",cat3Img);
    cat.scale=0.2;
    cat.velocityX = 0;
    cat.x = 300;
    cat.changeAnimation("lastImage");

   mouse.addAnimation("last image",mouse3Img);
   mouse.scale = 0.15;
   mouse.changeAnimation("last image");
    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.addAnimation("running",cat2Img);
      cat.changeAnimation("running");
      cat.velocityX = -5;

      mouse.addAnimation("teasing",mouse2Img);
      mouse.changeAnimation("teasing");

  }


}
