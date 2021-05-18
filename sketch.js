

var play

function preload(){
  photo=loadImage("Corona-2021.png");
  
  }

  function setup() {
    canvas = createCanvas(1800,4000);
    play=createSprite(490,470,30,30);
    play.addImage(photo); 
    play.scale=0.45;
  }


function draw() {
  background(255,255,255);  

 
  fill("Grey");
  textSize(135);
  text("2021", 330, 100);

  fill("Red");
  textSize(45);
  text("Welcome to Bacchus Marsh College!", 130, 200);
  fill("Blue");
  textSize(40);
  text("This is to celebrate for passing 2020 successfully!", 40, 240);
  ///fill("Blue");
  //textSize(25);
  //text("The Visual Communication students have made a 2021 poster that represents our time in covid-19.", 170, 230);
  


  drawSprites();

}