//Variables of Bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let radius = dBolinha/2;

//Speed of Bolinha
let speedxBolinha = 6;
let speedyBolinha = 6;

//Variables of Racket
let xRacket = 5;
let yRacket = 150;

//Variables of Racket
let wRacket = 8;
let hRacket = 90;

//Oponent Variables
let xOpponent = 587;
let yOpponent = 150;
let speedyOpponent;

//Sounds
let hit;
let point;

let coliding = false;

//Score
let myScore = 0;
let OppScore = 0;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  showBolinha();
  movementBolinha();
  colision();
  showRacket(xRacket, yRacket);
  showRacket(xOpponent, yOpponent);
  movementRacket();
  movementOpponent();
  colidingRacket(xRacket, yRacket);
  colidingRacket(xOpponent, yOpponent);
  Score();
  Point();
}

function showBolinha(){
  circle(xBolinha, yBolinha, dBolinha);
}

function movementBolinha(){
  xBolinha += speedxBolinha;
  yBolinha += speedyBolinha;
} 

function colision(){
  if (xBolinha + radius > width || xBolinha - radius < 0){
    speedxBolinha *= -1;
  }
  
  if (yBolinha + radius > height || yBolinha - radius < 0){
    speedyBolinha *= -1;
  }
}

function showRacket(x,y){
  rect(x, y, wRacket, hRacket);
}

function movementRacket(){
  if (keyIsDown(UP_ARROW)){
    yRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRacket += 10;
  }
}

function movementOpponent(){
  speedyOpponent = yBolinha - yOpponent - wRacket / 2 - 50;
  yOpponent += speedyOpponent;
}

function colidingRacket(x,y){
  hit = collideRectCircle(x, y, wRacket, hRacket, xBolinha, yBolinha, radius);
  if (hit){
    speedxBolinha *= -1;
    
  }
}

function Score(){
  stroke(255);
  textAlign(CENTER);
  textSize(18);
  fill(218,165,32);
  rect(180, 13, 40, 20);
  fill(255);
  text(myScore, 200, 30);
  fill(218,165,32);
  rect(380, 13, 40, 20);
  fill(255);
  text(OppScore, 400, 30);
}

function Point(){
  if (xBolinha > 590){
    myScore += 1;    
  }
  
  if (xBolinha < 10){
    OppScore += 1;      
  }
}