const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;

var ball,blower,blowermouth;

var button;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
ball=new Ball(400,100,30);
console.log(ball)
blower=new Blower(300,300,200,20);
blowermouth=new Blowermouth(400,280,100,100)

button=createButton("click to blow");
button.position(300,350);
button.class("blowButton");
button.mousePressed(blow);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ball.display()
  blower.display()
 blowermouth.display()
}

function blow(){
  Matter.Body.applyForce(ball.ball,{x:0,y:0},{x:0,y:0.05});
}