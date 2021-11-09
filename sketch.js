
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 1.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	ground = new Ground(200,390,400,20);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  drawSprites();
 
}



