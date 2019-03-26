class Ball{

constructor(){
	this.screenWidth = 800;
	this.screenHeight = 600;
	
	this.x = random(this.screenWidth);
	this.y = random(this.screenHeight);
	this.width = 20;
	this.height = 20;
	this.speedX = 1;
	this.speedY = 1;
}
	
	draw(){
		this.collide();
		this.collideGoal();
		rect(this.x, this.y, this.width, this.height);
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
	collide(){
	if (this.y <= 0 || this.y + this.height >= this.screenHeight) {
		this.speedY = this.speedY * -1;
	}
	}
	collideGoal() {
		if (this.x + this.width >= this.screenWidth || this.x <= 0) {
				this.x = random(this.screenWidth);
				this.y = random(this.screenHeight);
				this.speedX = 1;
				this.speedY = 1;
		}
	}


}