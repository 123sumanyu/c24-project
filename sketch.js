const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber1,rubber2,rubber3,rubber4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  rubber1=new Rubber(100,100,6);
  rubber2=new Rubber(110,110,6);
  rubber3=new Rubber(120,120,6);
  rubber4=new Rubber(130,130,6);

  
  box1=new Box(200,200,50,50);

  box2=new Box(400,220,100,50);
  
  box3=new Box(600,270,150,150);
   

  ball1=new Ball(50,90,70,90);



}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();

    box1.display();

    box2.display();
    box3.display();

    ball1.display();

    
 
}