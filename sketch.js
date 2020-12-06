const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var division1, division2, division3, division4, division5, division6, division7; 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20);

  for(var k = 0; k <= width; k =k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinkoes(i, 175));
  }
  for(var i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinkoes(i, 255));
  }
  for(var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinkoes(i, 335));
  }
  for(var i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinkoes(i, 415));
  }

  
};

function draw() {
  background(0);
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10));
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  }
  
  ground.display();
};