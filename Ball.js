class Ball{

constructor(){
	this.screenWidth = 800;
	this.screenHeight = 600;
	
	this.x = random(50, this.screenWidth-50);
	this.y = random(20, this.screenHeight-20);
	this.width = 20;
	this.height = 20;
	this.speedX = 2;
	this.speedY = 2;
}
	
	draw(){
		this.collide();
		rect(this.x, this.y, this.width, this.height);
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
	collide(){
	if (this.y <= 0 || this.y + this.height >= this.screenHeight) {
		this.speedY = this.speedY * -1;
	}
	}
  
  reset() {
		this.x = random(50, this.screenWidth-50);
		this.y = random(20, this.screenHeight-20);
		this.speedX = 2;
		this.speedY = 2;
  }



}