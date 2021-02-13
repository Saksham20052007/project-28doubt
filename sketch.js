const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var Mango1, Mango2, Mango3,Mango4,Mango5,Mango6,Mango7,Mango8;
var ground;
var tree, treeImage, boy, boyImage;
var stone;
var sling;
var gameState;


function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(650, 450, 30, 50);
	tree.addImage(treeImage);
	tree.scale = 0.4;

	boy = createSprite(200, 650, 50, 50);
	boy.addImage(boyImage);
	boy.scale = 0.09;


		
	Mango1 = new mango(700, 400, 70, 70);
	Mango2 = new mango(620, 330, 70, 70);
	Mango3 = new mango(700, 330, 70, 70);
	Mango4 = new mango(670, 260, 70, 70);
	Mango5 = new mango(620, 260, 70, 70);
	Mango6 = new mango(750, 260, 70, 70);
	Mango7 = new mango(550, 400, 70, 70);
	Mango8 = new mango(600, 500, 70, 70);

	stone = new Stone(160,590, 20, 20 );





	ground = new Ground(100, 700, width, 10);

	tree = createSprite(650, 450, 30, 50);
	tree.addImage(treeImage);
	tree.scale = 0.4;

	 sling = new SlingShot(stone.body, {x:160, y:600})

	gameState = "onsling";

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

    drawSprites();

  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();

  stone.display();;

  ground.display();

  sling.display();

  
	tree.depth = Mango1.depth-5;

	collision1();
	collision2();
	collision3();
	collision4();
	collision5();
	collision6();
	collision7();
	collision8();

 
}

function mouseDragged(){
    if(gameState ==="onSling"){

        Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(stone.body);
        Matter.Body.setPosition(stone.body, {x:160, y:590});
        gameState = "onSling";
    }
}

function collision1(){
	if(Mango1.x-stone.x>Mango1.width/2+stone.width/2 && Mango1.y-stone.y>Mango1.height/2+stone.height/2){
	Matter.Body.setStatic(Mango1.body, false);
	}
	} 
	
function collision2(){
	if(Mango2.x-stone.x>Mango2.width/2+stone.width/2 && Mango2.y-stone.y>Mango2.height/2+stone.height/2){
	Matter.Body.setStatic(Mango2.body, false);
	}
}

function collision3(){
	if(Mango3.x-stone.x>Mango3.width/2+stone.width/2 && Mango3.y-stone.y>Mango3.height/2+stone.height/2){
	Matter.Body.setStatic(Mango3.body, false);
	}
}

function collision4(){
	if(Mango4.x-stone.x>Mango4.width/2+stone.width/2 && Mango4.y-stone.y>Mango4.height/2+stone.height/2){
	Matter.Body.setStatic(Mango4.body, false);
	}
}

function collision5(){
	if(Mango5.x-stone.x>Mango5.width/2+stone.width/2 && Mango5.y-stone.y>Mango5.height/2+stone.height/2){
	Matter.Body.setStatic(Mango5.body, false);
	}
} 

function collision6(){
	if(Mango6.x-stone.x>Mango6.width/2+stone.width/2 && Mango6.y-stone.y>Mango6.height/2+stone.height/2){
	Matter.Body.setStatic(Mango6.body, false);
	}
}

function collision7(){
	if(Mango7.x-stone.x>Mango7.width/2+stone.width/2 && Mango7.y-stone.y>Mango7.height/2+stone.height/2){
	Matter.Body.setStatic(Mango7.body, false);
	}
} 

function collision8(){
	if(Mango8.x-stone.x>Mango8.width/2+stone.width/2 && Mango8.y-stone.y>Mango8.height/2+stone.height/2){
	Matter.Body.setStatic(Mango8.body, false);
	}
}



