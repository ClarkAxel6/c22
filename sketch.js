const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var myEngine, myWorld;
var ball, ground;

function setup() {
  createCanvas(800,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ball_opt = {
    restitution: 1.5 //bounce
  }
  
  ball = Bodies.circle(200,100,20, ball_opt);
  World.add(myWorld, ball);

  var ground_opt = {
    isStatic:true
  }

  ground = Bodies.rectangle(400, 350, 800, 20, ground_opt);
  World.add(myWorld, ground);

  var render = Render.create({
    element: document.body, 
    engine: myEngine, 
    options: { width: 800, height: 400, showAngleIndicator: true }
    }); 
    Render.run(render);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine);
  fill('black');
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
}