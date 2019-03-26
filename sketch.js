


function setup() {
	width = 800;
	height = 600;
  createCanvas(width, height);
	p1 = new Player(5, 87, 83);
	p2 = new Player(width-5-20, 38, 40);
	ball = new Ball();
}

function draw() {
  background(0);
	stroke(255);
	for (i = 0; i < height/2; i++) {
	rect(width/2-5, i*20, 10, 10);
	}
	
	collidePlayer();
	p1.draw();
	p2.draw();
	ball.draw();
}

window.onkeydown = (e) => {
	var key = e.keyCode ? e.keyCode : e.which;
	p1.onkeydown(e);
	p2.onkeydown(e);
	
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