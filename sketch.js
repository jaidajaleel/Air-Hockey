// Boundary1,2,3,4,5,6;Goal1,2; striker; computerMallet; PlayerMallet
var boundary1;
var boundary2;
var boundary3;
var boundary4;
var boundary5;
var boundary6;
var boundary7;
var boundary8;
// variable to store different states of game
var gameState = "serve";

var compScore = 0;
var playerScore = 0;
var goal,goal2;
var compMallet,playerMallet;
var striker;

function setup()
{
  boundary1 = createSprite(200, 300, 400, 5);
boundary1.shapeColor = "white";
 boundary2 = createSprite(200, 100, 400, 5);
boundary2.shapeColor = "white";
boundary3 = createSprite(380, 200, 5, 400);
boundary3.shapeColor = "white";
boundary4 = createSprite(20, 200, 5, 400);
boundary4.shapeColor = "white";
boundary5 = createSprite(200, 10, 400, 5);
boundary5.shapeColor = "white";
boundary6 = createSprite(200, 390, 400, 5);
boundary6.shapeColor = "white";
goal1 = createSprite(200, 380, 100, 20);
goal1.shapeColor = "yellow";
goal2 = createSprite(200, 20, 100, 20);
goal2.shapeColor = "yellow";
striker = createSprite(200, 200, 15, 15);
striker.shapeColor ="white";
compMallet = createSprite(200, 360, 60, 10);
compMallet.shapeColor = "black";
playerMallet = createSprite(200, 40, 60, 10);
playerMallet.shapeColor = "black";
boundary7 = createSprite(4, 200, 8, 400);
boundary7.shapeColor = "black";
boundary8 = createSprite(396, 200, 8, 400);
boundary8.shapeColor = "black";



}

function draw() {
background("deepSkyBlue");
//createEdgeSprites();

compMallet.x = striker.x;

 if (gameState === "serve" ) 
 {
      textSize(15);
      fill('black')
      text("Press 'space to start", 140, 150);
 }
 
 if (keyDown("space") && gameState === "serve") {
  serve();
  gameState = "play";
 }
 
 //scoreboad
 text(playerScore, 45, 175);
 text(compScore, 45, 225);
 



striker.bounceOff(boundary5);
 
 
  if (keyDown("left")) {
  playerMallet.x = playerMallet.x-10;
 }
  
if (keyDown("right")) {
  playerMallet.x = playerMallet.x+10;
 }
 
 if (keyDown("up")) {
 if(playerMallet.y >25) {    
 playerMallet.y = playerMallet.y-10;
 }
 }
 
 if (keyDown("down")) {
  if(playerMallet.y<100){
   playerMallet.y=playerMallet.y+10;  
   }
 }
 
 
 
 //draw line in the centre
for (var i = 0; i < 400; i=i+20) {
   line(i, 200, i+10, 200);
 }


    
if (striker.isTouching(goal2)) {
 reset();
 gameState = "serve";
  compScore = compScore+1;
}

 if (striker.isTouching(goal1)) {
    reset();
    gameState = "serve";
  playerScore = playerScore+1;
  }
   if (compScore===5) {
  gameState = "over";
  playerMallet.x = 200;
  playerMallet.y = 40;
  textSize(15);
  text("Game Over", 160, 130);
  text("Press 'R' to restart", 140, 150);
}

if (playerScore===5) {
  gameState = "over";
  playerMallet.x = 200;
  playerMallet.y = 40;
  textSize(15);
  text("Game Over", 160, 130);
  text("Press 'R' to restart", 140, 150);
}

if (keyDown("r")&& gameState === "over") {
  gameState = "serve";
  compScore = 0;
  playerScore = 0;
}




 striker.bounceOff(boundary3);
striker.bounceOff(boundary4);
compMallet.bounceOff(boundary4);
compMallet.bounceOff(boundary3);
playerMallet.bounceOff(boundary4);
playerMallet.bounceOff(boundary3);
striker.bounceOff(playerMallet);
striker.bounceOff(compMallet);

drawSprites(); 


}



function serve(){
striker.velocityX = 7;
striker.velocityY = -6;
}

function reset(){
  
striker.x = 200;
striker.y = 200;
striker.velocityX = 0;
striker.velocityY = 0;

}
