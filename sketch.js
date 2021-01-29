const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3,ground4,ground5,ground6;
var enemy1,enemy2,enemy3,enemy4;
var backgroundIMG;
var ball,slingshot;
var gameState = "ONSLING";
var score = 0;



function preload(){
  backgroundIMG = loadImage("sprites/bg1.jpg");

}


function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(550,450,100,20);
  ground2 = new Ground(700,300,100,20);
  ground3 = new Ground(850,200,100,20);
  ground4 = new Ground(1000,390,100,20);
  ground5 = new Ground(60,600,2500,20);
  ground6 = new Ground(120,490,250,200);
  ground7 = new Ground(1200,250,100,20);
  ground8 = new Ground(1100,100,100,20);
  ground9 = new Ground(800,530,100,20);
  ground10 = new Ground(500,100,100,20);

  enemy1 = new Bigeye(550,415);
  enemy2 = new Bigeye(710,265);
  enemy3 = new Monster(860,165);
  enemy4 = new Monster(1010,355);
  enemy5 = new Monster(800,520);
  enemy6 = new Bigeye(510,95);
  enemy7 = new Monster(1200,245);
  enemy8 = new Bigeye(1100,95);
  
 

  ball = new Ball(200,230);

   
  slingshot = new SlingShot(ball.body,{x:200, y:230});
  




  
}

function draw() {
  background(backgroundIMG); 
  textSize(35);
  fill("white");
  text("score : " + score , width - 1200, 50);
  textSize(15); 
  text("the big eye monster will deduct points and the large mouth monster will increase points and press spacebar to play again", 250,580);
  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();
  ground10.display();

  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  enemy1.score();
  enemy2.score();
  enemy3.score();
  enemy4.score();
  enemy5.score();
  enemy6.score();
  enemy7.score();
  enemy8.score();

  

  ball.display();
  slingshot.display();
  
}

function mouseDragged(){
  if (gameState === "ONSLING"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
      console.log("dragged");
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "LAUNCHED";
  console.log("released");
}

function keyPressed(){

  if(keyCode === 32 ){
      
      Matter.Body.setPosition(ball.body,{x : 200, y :230});
      slingshot.attach(ball.body);
      gameState = "ONSLING";
     
  }
}