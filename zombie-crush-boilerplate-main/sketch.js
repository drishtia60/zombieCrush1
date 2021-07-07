const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(745,745,5000,10,true);
  wall1 = new Base(20,500,10,5000,true);
  wall2 = new Base(1500,500,10,5000,true);
  bridge = new Bridge(16,{x:505,y:200});
  jointPoint = new Base(1040,230,10,10,true);

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint);

  for(var i =0;i <= 8;i++){
    var x = random(510,1020);
    var y = random(100,140);
    var stone = new Stone(x,y,50,50);
    stones.push(stone);
  }

}

function draw() {
  background(51);

  ground.display();
  wall1.display();
  wall2.display();
  bridge.show();
  

  for(var stone of stones){
    stone.display();
  }

  Engine.update(engine);

}
