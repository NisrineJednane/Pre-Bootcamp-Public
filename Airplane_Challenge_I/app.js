//set player location
var player = {
    left: 450,
    top: 620
}

//set enemy location
var enemies = [
    {left: 50, top: 50},
    {left: 750, top: 70},
    {left: 450, top: 60},
    {left: 250, top: 125}
]


//add position player html
function drawPlayer() {
    content = "<div class='player' style='left:" + player.left + "px; top: " + player.top + "px'></div>";
    document.getElementById('players').innerHTML = content;
}
drawPlayer();


//draw enemies 
function drawEnemies() {
    content = '';
    for (var i = 0; i < enemies.length; i++) {  
        content += "<div class='enemy' style='left:"+enemies[i].left+"px; top:"+enemies[i].top+"px'></div>";
    }
    document.getElementById('enemies').innerHTML = content;
}
drawEnemies();




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
    drawPlayer();
}


