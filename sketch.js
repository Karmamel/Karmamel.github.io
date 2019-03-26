


function setup() {
	width = 800;
	height = 600;
  createCanvas(width, height);
	p1 = new Player(5, 87, 83);
	p2 = new Player(width-5-20, 38, 40);
	ball = new Ball();
  
  p1Points = 0;
  p2Points = 0;
}

function draw() {
  background(0);
	stroke(255);
	for (i = 0; i < height/2; i++) {
	rect(width/2-5, i*20, 10, 10);
	}
	
	collidePlayer();
  collideGoal();
	p1.draw();
	p2.draw();
	ball.draw();
}

window.onkeydown = (e) => {
	var key = e.keyCode ? e.keyCode : e.which;
	p1.onkeydown(e);
	p2.onkeydown(e);
	
}

window.onkeyup = (e) => {
	var key = e.keyCode ? e.keyCode : e.which;
	p1.onkeyup(e);
	p2.onkeyup(e);
}

function collidePlayer() {
	if (ball.x + ball.width >= p2.x && ball.y > p2.y && ball.y < p2.y + 150) {
	ball.speedX = ball.speedX * -1.2;
	ball.speedY = ball.speedY * 1.2;
	}
	if (ball.x <= p1.x + 20 && ball.y > p1.y && ball.y < p1.y + 150) {
	ball.speedX = ball.speedX * -1.2;
	ball.speedY = ball.speedY * 1.2;
	}
}
  
function collideGoal() {
	if (ball.x + ball.width >= this.width) {
		ball.reset();
    p1Points++;
    console.log("Player1:"+p1Points);
  	console.log("Player2:"+p2Points);
		} else if (ball.x <= 0) {
		ball.reset();
    p2Points++;
    console.log("Player1:"+p1Points);
  	console.log("Player2:"+p2Points);
    }
  
}