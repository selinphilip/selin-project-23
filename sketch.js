var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boundary1 = createSprite(width/2,height-50,200,20);
	boundary1.shapeColor = color("red");
	boundary2 = createSprite(510,610,20,100);
	boundary2.shapeColor = color("red");
	boundary3 = createSprite(310,610,20,100);
	boundary3.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	 World.add(world, packageBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key
   Matter.Body.setStatic(packageBody,false);
 }
}



