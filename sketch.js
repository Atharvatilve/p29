const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ground1,ground2;
var box1;
function setup() {
  createCanvas(800,1200);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(300,500,200,20);
  ground2 = new Ground(570,400,200,20);
  box1 = new Box(200,200,20,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  box1.display();
  
}