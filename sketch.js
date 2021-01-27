var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;

var car1Img, car2Img, roadImg;

function preload(){
  
  roadImg = loadImage("road.jpg");
  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");

}


function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth - 30, displayHeight-20);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
