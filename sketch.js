const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine,world
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
function setup() {
  createCanvas(680,800);
  engine = Engine.create();
  world = engine.world;
  

  for(var k =0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko (j,75))
  }


  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

}

function draw() {
  background(0,0,0);
  Engine.update(engine)  

for (var k=0;k<divisions.length;k++){
  divisions[k].display()
}

for(var j=15;j<plinkos.length;j++){
plinkos[j].display()
}


  drawSprites();
}