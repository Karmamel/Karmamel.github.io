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
		rect(this.x, this.y, this.width, this.height);
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
  
  reset() {
		this.x = random(50, this.screenWidth-50);
		this.y = random(20, this.screenHeight-20);
		this.speedX = 2;
		this.speedY = 2;
  }



}