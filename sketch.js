const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  box1,box2,ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
//create object box
    box1 = new boxClass(200,300,50,50);
    box2 = new boxClass(240,100,50,100);
    ground1 = new ground(200,390,400,20);

    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    
}