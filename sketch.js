var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
var box1s,box2s,box3s
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1s = createSprite(400,650,200,20);
	box1s.shapeColor=color("red");
	box2s = createSprite(310,600,20,100);
	box2s.shapeColor=color("red");
	box3s = createSprite(490,600,20,100);
	box3s.shapeColor=color("red");

	



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1=Bodies.rectangle(400,650,200,20 , {isStatic:true} );
	World.add(world,box1)
	box2=Bodies.rectangle(310,600,20,100, {isStatic:true} );
	World.add(world,box1)
	box3=Bodies.rectangle(490,600,20,100, {isStatic:true} );
	World.add(world,box1)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  box1s.x=box1.position.x 
  box1s.y=box1.position.y
  box2s.x=box2.position.x 
  box2s.y=box2.position.y
  box3s.x=box3.position.x 
  box3s.y=box3.position.y
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
    

    
  }
}



