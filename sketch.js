const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, spider1,spider3;
var backgroundImg,platform;
var frog, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    spider1 = new Spider(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    spider3 = new Spider(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    frog = new Frog(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(frog.body,{x:200, y:50});
}

function draw(){
     background("white");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    spider1.display();
    spider1.score();
    log1.display();

    box3.display();
    box4.display();
    spider3.display();
    spider3.score();
    spider3.display();

    box5.display();
    log4.display();
    log5.display();

    frog.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(frog.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32&&frog.frog.speed<1){
        frog.trajectory=[];
       Matter.Body.setPosition(frog.body,{x:200, y:50});
        slingshot.attach(frog.body);
        gameState=="onSling";
    }
}

