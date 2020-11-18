const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particle = [];
var plinko = [];
var division = [];

var divisonHeight = 300;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,785,480,30);
    for(var k = 0; k<=width ; k = k+80)
        {
            division.push(new Division(k,height-divisonHeight/2,10,divisonHeight))
        }

        for(var j = 40;j<= width; j = j+50)
        {
            plinko.push(new Plinko(j,75));
        }
        for(var j = 15; j<=width; j = j+50)
        {
            plinko.push(new Plinko(j,175));
        }

        
    
}

function draw(){
    
        background(0,0,0);
        
        if(frameCount%60===0)
        {
            
            particle.push(new Particle(random(width/2-10,width/2+10),10,10));
            //particle[particle.length-1].display();
        }

        for(var k =0; k<particle.length;k++)
  {
      particle[k].display();
  }
        
        
    
    Engine.update(engine);
    
  for(var k =0; k<division.length;k++)
  {
      division[k].display();
  }

  for(var j = 0; j< plinko.length;j++)
  {
      plinko[j].display();
  }
    ground.display();
      
}

