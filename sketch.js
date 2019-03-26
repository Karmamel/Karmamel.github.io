


function setup() {
	width = 1000;
	height = 800;
  createCanvas(width, height);
	p1 = new Player(5, 87, 83, this);
	p2 = new Player(width-5-20, 38, 40, this);
	ball = new Ball();
  
  p1Points = 0;
  p2Points = 0;
  
  p1p = createP("First Player:"+p1Points);
  p2p = createP("Second Player:"+p2Points);
}

function draw() {
  background(0);
	stroke(255);
	for (i = 0; i < height/2; i++) {
	rect(width/2-5, i*20, 10, 10);
	}
	collide();
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

function collide() {
	if (ball.y <= 0 || ball.y + ball.height >= height) {
		ball.speedY = ball.speedY * -1;
	}
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
		p1p.elt.innerText = "First Player:"+p1Points;
		} else if (ball.x <= 0) {
		ball.reset();
    p2Points++;
    p2p.elt.innerText = "Second Player:"+p2Points;
    }
  
}