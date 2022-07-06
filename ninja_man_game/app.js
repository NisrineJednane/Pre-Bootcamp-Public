//store score globally
var score =0;

//store lives globally
var lives = 3;


//fetch score display location
var displayScore = document.getElementById('score')

//fetch lives display lovation
var displayLives = document.getElementById('lives')

//randomize world
function random(max,min){
    return Math.floor(Math.random()* (max-min +1))+min;
    }

//world grid
var world = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),random(-1,4),1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];

//world legend
var worldLegend = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri',

}

//draw world
function drawWorld(){
    var output = "";
    for(var row = 0; row <world.length; row++){
      output += "<div class = 'row'>"
      for(var x=0; x< world[row].length; x++){
        output += "<div class = '"+worldLegend[world[row][x]] +"'></div>"
      }
      output += "</div>"
    }

    document.getElementById('world').innerHTML = output;

  }
  drawWorld();
  

  //draw ninja man
  var ninjaman = {
    x: 1,
    y: 1,

  }
  
function drawNinjaman(){
    document.getElementById('ninjaman').style.top = ninjaman.y*40+'px'
    document.getElementById('ninjaman').style.left = ninjaman.x*40+'px'
}
drawNinjaman();

//draw ghost
var ghost = {
    x: 8,
    y: 6,
  }

function drawghost(){
    document.getElementById('ghost').style.top = ghost.y*40+'px'
    document.getElementById('ghost').style.left = ghost.x*40+'px'
  }
drawghost();



//user key moves +  calculate score
document.onkeydown = function(e){
  if(e.keyCode === 37){ //left
    if(world[ninjaman.y][ninjaman.x-1] !==1){
   ninjaman.x--;
  }
}
  if(e.keyCode === 38){ //up
     if(world[ninjaman.y-1][ninjaman.x] !==1){
   ninjaman.y--;
  }
 }
  if(e.keyCode === 39){ //right
    if(world[ninjaman.y][ninjaman.x+1] !==1){
   ninjaman.x++;
  }
 }
  if(e.keyCode === 40){ //down
    if(world[ninjaman.y+1][ninjaman.x] !==1){
   ninjaman.y++;
  }
  }
  //calculate score with each move
    if(world[ninjaman.y][ninjaman.x] === 2){
        world[ninjaman.y][ninjaman.x] = 0;
        score+=10;
        displayScore.innerText = score
    }
    else if(world[ninjaman.y][ninjaman.x] === 3){
        world[ninjaman.y][ninjaman.x] = 0;
        score+=5;
        displayScore.innerText = score
    }
    if((ninjaman.x === ghost.x) && (ninjaman.y === ghost.y)) {
        lives -=1;
        displayLives.innerText = lives
    }
    if(lives === 0){
        alert("Game Over. \nYour Final Score is: " + score + "\nReload Page to Play Again!");
        

    }
    drawNinjaman()
    drawWorld()
}

//move pumpky
function moveGhost(){
    var move = random(-1,4);
    if(move ===0 && (world[ghost.y][ghost.x-1] !==1)){//0 = left
      ghost.x--;
    } 
    else if(move ===1 && (world[ghost.y][ghost.x+1] !==1)){//1 = right
      ghost.x++;
    }
    else if(move ===2 && (world[ghost.y-1][ghost.x] !==1)){//2 = up
    ghost.y--;
    }
    else if(move ===3 && (world[ghost.y+1][ghost.x] !==1)){//3 = down
    ghost.y++;
    }
}
     
  
   
function reloadGame() {
    drawNinjaman();
    drawghost();
    moveGhost();
    drawghost();

    setTimeout(reloadGame, 350)
}
  

  reloadGame();
  
