const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1;
var ball1,ball2,ball3;

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  
  ground1=new Ground(200,390,400,20);
  ball1=new Ball(200,300,20,20);
  ball2=new Ball(240,100,20,20);
  ball3=new Ball(100,200,20,20);
}

function draw() {
  background("lightblue");
  Engine.update(engine);
   
  ground1.display();
  ball1.display();
  ball2.display();
  ball3.display();
}