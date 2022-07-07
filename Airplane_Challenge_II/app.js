//set player location
var player = {
    left: 450,
    top: 620
}

//randomize function 
function random(max,min){
    return Math.floor(Math.random()* (max-min +1))+min;
}

//set enemy at random location
var enemies = [
    {left: random(60, 500), top: random(20, 10)},
    {left: random(80, 400), top: random(30, 20)},
    {left: random(830, 600), top: random(80, 60)},
    {left: random(830, 600), top: random(50, 70)}
]




// missiles
var missiles = [];



//add position player html
function drawPlayer() {
    content = "<div class='player' style='left:" + player.left + "px; top: " + player.top + "px'></div>";
    document.getElementById('players').innerHTML = content;
}


//draw enemies 
function drawEnemies() {
    content = '';
    for (var i = 0; i < enemies.length; i++) {  
            content += "<div class='enemy' style='left:"+enemies[i].left+"px; top:"+enemies[i].top+"px'></div>";
        
     }
     document.getElementById('enemies').innerHTML = content;
}

// move enemies from top to bottom
function moveEnemies() {
    for (var x=0; x < enemies.length; x++) {
        enemies[x].top += 10;
    }
}

//move missiles from bottom to top
function moveMissiles() {
    for (var x=0; x < missiles.length; x++) {
        missiles[x].top -= 20;
    }
}

// draw missiles
function drawMissiles(){
    content = "";
    for(var x =0; x<missiles.length; x++){
      content += "<div class = 'missile' style='left: "+missiles[x].left+"px; top: "+missiles[x].top+"px'></div>"
    }
    document.getElementById("missiles").innerHTML = content;
}

//move player plane
document.onkeydown = function(e) {
    if (e.keyCode === 37) {     // left
        player.left = player.left - 10;
    } else if (e.keyCode === 39) {     // right
        player.left = player.left + 10;
    } else if (e.keyCode === 38 && player.top > 450) {   //up
        player.top = player.top - 10;
    } else if (e.keyCode === 40 && player.top < 640) {     //down
        player.top = player.top + 10;
    }
    if (e.keyCode === 90) { //z, fire missile
        missiles.push({left: player.left+34, top: player.top-8})
        drawMissiles();
    }
    drawPlayer();
}

// create gameloop function, smooth out movements
function gameLoop() {
    drawPlayer();

    moveEnemies();
    drawEnemies();

    moveMissiles();
    drawMissiles();
    setTimeout(gameLoop, 100)
}
gameLoop();


